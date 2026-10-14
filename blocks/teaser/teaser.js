export default function decorate(block) {
  // Extract content from rows/columns rendered by EDS
  const rows = [...block.children];

  rows.forEach((row) => {
    const cells = [...row.children];
    // Modify DOM or add custom classes
    if (cells[0]) cells[0].classList.add('teaser-image');
    if (cells[1]) cells[1].classList.add('teaser-content');
  });
}
