import { useState, useEffect } from 'react';

export const useFormValidation = ({ title, year, format, stars }) => {
  const [titleError, handleTitleError] = useState(false);
  const [releaseYearError, handleReleaseYearError] = useState(false);
  const [formatError, handleFormatError] = useState(false);
  const [starsError, handleStarsError] = useState(false);

  useEffect(() => {
    if (title.length === 0) {
      handleTitleError(true);
    } else {
      handleTitleError(false);
    }
    
    if (year.length === 0) {
      handleReleaseYearError(true);
    } else {
      handleReleaseYearError(false)
    }

    if (format.length === 0) {
      handleFormatError(true);
    } else {
      handleFormatError(false);
    }

    if (stars.length === 0) {
      handleStarsError(true);
    } else {
      handleStarsError(false);
    }
    
  }, [title, year, format, stars]);

  return {
    titleError,
    releaseYearError,
    formatError,
    starsError
  }
}