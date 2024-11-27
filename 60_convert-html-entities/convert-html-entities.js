export const convertHTMLEntities = (str) => {
  const htmlEntitiesMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  };
  
  const regex = /[&<>"']/g;
  return str.replace(regex, (key) => {
    return htmlEntitiesMap[key];
  });
};
