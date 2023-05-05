function hamburger_toggle(e, other) {
  if (e.classList.contains('open')) {
    e.classList.remove('open');
    e.classList.add('close');
  } else {
    e.classList.remove('close');
    e.classList.add('open');
  }
  other.classList.toggle('open');
}