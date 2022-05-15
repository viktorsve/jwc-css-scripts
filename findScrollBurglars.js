function checkElemWidth (elem) {
  if (elem.clientWidth > window.innerWidth) {
    console.info(
      'The following element has a larger width than ' +
        'the window’s outer width'
    )
    console.info(elem)
    console.info('\n\n')
  }
  // Recursively check all the children
  // of the element to find the culprit.
  ;[...elem.children].forEach(checkElemWidth)
}
checkElemWidth(document.body)
