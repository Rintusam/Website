import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FaSearch, FaTimes, FaGraduationCap, FaUniversity } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { collegesData } from '../../data/collegesData';
import './CourseSearch.css';

/**
 * CourseSearch
 * Smart search bar:
 *  - Typing a course name → shows unique matching course names (deduplicated)
 *  - Typing a college name → shows matching college names as a separate group
 * Both groups are shown together when the query matches both.
 */
function CourseSearch() {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const [courseResults, setCourseResults] = useState([]); // unique course names
    const [collegeResults, setCollegeResults] = useState([]); // unique college names
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    // Pre-computed data
    const uniqueCourses = useRef([]); // [{ courseName }]
    const uniqueColleges = useRef([]); // [{ collegeName, location }]

    useEffect(() => {
        // Deduplicate courses across all colleges
        const courseSet = new Set();
        collegesData.forEach((college) => {
            college.courses.forEach((course) => courseSet.add(course));
        });
        uniqueCourses.current = Array.from(courseSet).map((name) => ({ courseName: name }));

        // College list (already unique by name)
        uniqueColleges.current = collegesData.map((college) => ({
            id: college.id,
            collegeName: college.name,
            location: college.location,
        }));
    }, []);

    const handleSearch = useCallback((value) => {
        setQuery(value);
        if (value.trim().length < 2) {
            setCourseResults([]);
            setCollegeResults([]);
            setIsOpen(false);
            return;
        }
        const q = value.toLowerCase();

        // Match unique courses
        const matchedCourses = uniqueCourses.current.filter((item) =>
            item.courseName.toLowerCase().includes(q)
        );

        // Match colleges by name
        const matchedColleges = uniqueColleges.current.filter((item) =>
            item.collegeName.toLowerCase().includes(q)
        );

        setCourseResults(matchedCourses);
        setCollegeResults(matchedColleges);
        setIsOpen(matchedCourses.length > 0 || matchedColleges.length > 0);
    }, []);

    const clearSearch = () => {
        setQuery('');
        setCourseResults([]);
        setCollegeResults([]);
        setIsOpen(false);
    };

    const handleCourseClick = (courseName) => {
        clearSearch();
        navigate('/college', { state: { course: courseName } });
    };

    const handleCollegeClick = () => {
        clearSearch();
        navigate('/college');
    };

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const hasResults = courseResults.length > 0 || collegeResults.length > 0;

    return (
        <div className="course-search-wrapper" ref={wrapperRef}>
            {/* Search Input */}
            <div className="course-search-bar">
                <FaSearch className="search-icon-left" />
                <input
                    type="text"
                    className="course-search-input"
                    placeholder="Search for Courses or Colleges…"
                    value={query}
                    onChange={(e) => handleSearch(e.target.value)}
                    onFocus={() => hasResults && setIsOpen(true)}
                    aria-label="Search courses and colleges"
                    autoComplete="off"
                />
                {query && (
                    <button
                        className="search-clear-btn"
                        onClick={clearSearch}
                        aria-label="Clear search"
                    >
                        <FaTimes />
                    </button>
                )}
            </div>

            {/* Dropdown */}
            {isOpen && (
                <div className="course-search-dropdown" role="listbox">
                    {!hasResults ? (
                        <div className="search-no-results">
                            <FaGraduationCap className="no-results-icon" />
                            <p>No results for "<strong>{query}</strong>"</p>
                        </div>
                    ) : (
                        <>
                            {/* ── Courses Group ── */}
                            {courseResults.length > 0 && (
                                <>
                                    <div className="search-group-header">
                                        <FaGraduationCap className="group-header-icon" />
                                        Courses
                                    </div>
                                    <ul className="search-results-list">
                                        {courseResults.map((item, index) => (
                                            <li
                                                key={`course-${index}`}
                                                className="search-result-item search-result-item--clickable"
                                                role="option"
                                                onClick={() => { clearSearch(); navigate('/college', { state: { course: item.courseName } }); }}
                                            >
                                                <span className="result-course-text">{item.courseName}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}

                            {/* ── Colleges Group ── */}
                            {collegeResults.length > 0 && (
                                <>
                                    <div className={`search-group-header ${courseResults.length > 0 ? 'search-group-header--border' : ''}`}>
                                        <FaUniversity className="group-header-icon" />
                                        Colleges
                                    </div>
                                    <ul className="search-results-list">
                                        {collegeResults.map((item, index) => (
                                            <li
                                                key={`college-${index}`}
                                                className="search-result-item search-result-item--clickable"
                                                role="option"
                                                onClick={() => { clearSearch(); navigate(`/college-details/${item.id}`); }}
                                            >
                                                <span className="result-college-text">{item.collegeName}</span>
                                                <span className="result-college-location">{item.location}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

export default CourseSearch;
