import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

jest.mock('@fortawesome/react-fontawesome', () => ({
    FontAwesomeIcon: jest.fn().mockImplementation(({ icon }) => <span>{icon.iconName}</span>),
}));

describe('Header', () => {
    it('renders the title correctly', () => {
        render(<Header title="Test Title" />);

        expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    it('conditionally renders the back button', () => {
        const { rerender } = render(<Header title="Test Title" />);
        expect(screen.queryByTestId('back-button')).not.toBeInTheDocument();

        rerender(<Header title="Test Title" showButton={true} />);
        expect(screen.getByTestId('back-button')).toBeInTheDocument();
    });

    it('calls onButtonClick when the back button is clicked', () => {
        const onButtonClickMock = jest.fn();
        render(<Header title="Test Title" showButton={true} onButtonClick={onButtonClickMock} />);

        fireEvent.click(screen.getByTestId('back-button'));
        expect(onButtonClickMock).toHaveBeenCalledTimes(1);
    });

});
