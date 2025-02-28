export const getParamsFromQuery = (queryString) =>
  Object.fromEntries(new URLSearchParams(queryString).entries());

export const printHtml = (html) => {
  const printWindow = window.open("", "_blank");

  if (printWindow) {
    printWindow.document.write(`
      <html>
      ${document.head.innerHTML}
      <body>
        ${html}
      </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 500);
  }
};
