const licenses = {
  "MIT-1" : "MIT License\nCopyright (c) 2020 ",
  "MIT-2" : `\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF  CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`,
  "The Unlicense" : "This is free and unencumbered software released into the public domain.\nAnyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.\nIn jurisdictions that recognize copyright laws, the author or authors of this software dedicate any and all copyright interest in the software to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law.\nTHE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\nFor more information, please refer to <https://unlicense.org>",  
};
const questions = [
  `![Jason Mangin](./assets/images/bio.png)`,
  `[jasongmangin@gmail.com](mailto:jasongmangin@gmail.com)`
];



function generateMarkdown(data) {
  if (data.license[0] === "MIT") {
    var licenseText = `${licenses["MIT-1"]} ${data.name} ${licenses["MIT-2"]}`;
  }
  else if (data.license[0] === "The Unlicense") {
    var licenseText = `${licenses["The Unlicense"]}`;
  }
  else {
    var licenseText = "No license."
  }
  return `# ${data.title}\n![Packagist](https://img.shields.io/packagist/l/jollyrgr83/${data.title})\n## Installation Instructions\n${data.installation}\n## Usage\n${data.usage}\n## Credit\nI would like to thank ${data.credit}.\n## License\n${licenseText}\n## Contributing to this Project\n${data.contributing}\n## Tests\n${data.tests}\n## Link to Live Page\n[${data.link}](${data.link})\n## Questions\n${questions[0]}\n\n\n${questions[1]}`;
}

module.exports = generateMarkdown;