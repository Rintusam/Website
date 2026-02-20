import React from 'react';
import './ProgramSelectionModal.css';
import { useNavigate } from 'react-router-dom';
import { FaGraduationCap, FaUserGraduate, FaTimes } from 'react-icons/fa';

function ProgramSelectionModal({ isOpen, onClose, fieldType }) {
    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleProgramSelect = (programType) => {
        const routes = {
            science: { ug: '/science', pg: '/science-pg' },
            commerce: { ug: '/commerce', pg: '/commerce-pg' },
            arts: { ug: '/arts', pg: '/arts-pg' },
            // keep old routes so existing links still work
            medical: { ug: '/medical', pg: '/medical-pg' },
            'non-medical': { ug: '/non-medical', pg: '/non-medical-pg' },
        };
        const path = routes[fieldType]?.[programType];
        if (path) navigate(path);
        onClose();
    };

    const fieldTitle = fieldType
        ? fieldType.charAt(0).toUpperCase() + fieldType.slice(1).replace('-', ' ')
        : '';

    return (
        <div className="program-modal-overlay" onClick={onClose}>
            <div className="program-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="program-modal-close" onClick={onClose}>
                    <FaTimes />
                </button>

                <div className="program-modal-header">
                    <h2>Select Program Level</h2>
                    <p>Choose your preferred {fieldTitle} program type</p>
                </div>

                <div className="program-options">
                    <div
                        className="program-option ug-option"
                        onClick={() => handleProgramSelect('ug')}
                    >
                        <div className="program-icon">
                            <FaGraduationCap />
                        </div>
                        <h3>Undergraduate Programs</h3>
                        <p>Bachelor's degree programs</p>
                        <span className="program-tag">UG</span>
                    </div>

                    <div
                        className="program-option pg-option"
                        onClick={() => handleProgramSelect('pg')}
                    >
                        <div className="program-icon">
                            <FaUserGraduate />
                        </div>
                        <h3>Postgraduate Programs</h3>
                        <p>Master's degree programs</p>
                        <span className="program-tag">PG</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProgramSelectionModal;
