import { useState, useEffect } from 'react';

export const useFormValidation = ({ title, year, format, stars, isSubmit, dvdChecked, blueRayChecked, vhsChecked }) => {
  const [titleError, handleTitleError] = useState(false);
  const [releaseYearError, handleReleaseYearError] = useState(false);
  const [formatError, handleFormatError] = useState(false);
  const [starsError, handleStarsError] = useState(false);

  const [titleErrorText, handleTitleErrorText] = useState('');
  const [releaseYearErrorText, handleReleaseYearErrorText] = useState('');
  const [formatErrorText, handleFormatErrorText] = useState('');
  const [starsErrorText, handleStarsErrorText] = useState('');


  useEffect(() => {
    if (title.length === 0) {
      if (isSubmit === true) {
        handleTitleError(true);
        handleTitleErrorText('Field is required!')
      } else {
        handleTitleError(false);
        handleTitleErrorText('');
      }
    } else {
      handleTitleError(false);
      handleTitleErrorText('');
    }
    
    if (year.length === 0) {
      if (isSubmit === true) {
        handleReleaseYearError(true);
        handleReleaseYearErrorText('Field is required!')
      } else {
        handleReleaseYearError(false);
        handleReleaseYearError('');
      }
    } else {
      if (Number.isInteger(+year)) {
        if (+year >= 1850 && +year <= 2020) {
          handleReleaseYearError(false);
          handleReleaseYearErrorText('');
        } else {
          handleReleaseYearError(true);
          handleReleaseYearErrorText('Year must be from 1850 to 2020!')
        }
      } else {
        handleReleaseYearError(true);
        handleReleaseYearErrorText('Year must be a number!')
      }
    }
    if (dvdChecked === false && blueRayChecked  === false && vhsChecked  === false) {
      if (isSubmit === true) {
        handleFormatError(true);
        handleFormatErrorText('Field is required');
      } else {
        handleFormatError(false);
        handleFormatErrorText('');
      }
    } else {
      handleFormatError(false);
      handleFormatErrorText('');
    }

    if (stars.length === 0) {
      if (isSubmit === true) {
        handleStarsError(true);
        handleStarsErrorText('Field is require!');
      } else {
        handleStarsError(false);
        handleStarsErrorText('');
      }
    } else {
      const startArray = stars.split(',').map(item => item.trim());
      const uniqueArray = [...new Set(startArray)].map(item => item.trim());
      if (startArray.length === uniqueArray.length) {
        handleStarsError(false);
        handleStarsErrorText('');
      } else {
        handleStarsError(true);
        handleStarsErrorText('Write only unique actors');
      }
    }
    
  }, [title, year, format, stars, isSubmit, dvdChecked, blueRayChecked, vhsChecked]);

  return {
    titleError,
    releaseYearError,
    formatError,
    starsError,
    titleErrorText,
    releaseYearErrorText,
    formatErrorText,
    starsErrorText
  }
}