let renderLicenseBadge = license => {
    switch (license) {
        case "MIT":
            return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n\n";
        case "Apache 2.0":
            return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n\n";
        case "GPL 3.0":
            return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n\n";
        case "BSD 3":
            return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)\n\n";
        case "MPL 2.0":
            return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)\n\n";
        default:
            return "";
    }
}

let renderLicenseLink = license => (license === "None" ? "" : "[License](#license) \n");

let renderLicenseSection = license => {
    let section = `## License\n`;
    switch (license) {
        case "MIT":
            return section + `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n

        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n`;
        case "Apache 2.0":
            return section + `   Licensed under the Apache License, Version 2.0 (the "License");\n
        you may not use this file except in compliance with the License.\n
        You may obtain a copy of the License at\n
     
            http://www.apache.org/licenses/LICENSE-2.0\n
     
        Unless required by applicable law or agreed to in writing, software\n
        distributed under the License is distributed on an "AS IS" BASIS,\n
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n
        See the License for the specific language governing permissions and\n
        limitations under the License.\n`;
            n
        case "GPL 3.0":
            return section + `    This program is free software: you can redistribute it and/or modify\n
            it under the terms of the GNU General Public License as published by\n
            the Free Software Foundation, either version 3 of the License, or\n
            (at your option) any later version.\n\n
This program is distributed in the hope that it will be useful,\n
but WITHOUT ANY WARRANTY; without even the implied warranty of\n
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n
GNU General Public License for more details.\n
You should have received a copy of the GNU General Public License\nalong with this program.  If not, see https://www.gnu.org/licenses/.\n`;
        case "BSD 3":
            return section + `Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\n
1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.\n
2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.\n
3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.\n
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n`;
        case "MPL 2.0":
            return section + `  This Source Code Form is subject to the terms of the Mozilla Public\nLicense, v. 2.0. If a copy of the MPL was not distributed with this\nfile, You can obtain one at http://mozilla.org/MPL/2.0/.\n`;
        default:
            return "";
    }
}

let renderTitle = title => `# ${title.toUpperCase()}\n\n`

let renderTableContents = license => {
    let table = '';
    table += `[Description](#description) \n`;
    table += `[Installation](#installation) \n`;
    table += `[Usage](#usage) \n`;
    table += renderLicenseLink(license);
    table += `[Test](#test) \n`;
    table += `[Contact](#contact) \n\n`;
    return table;
}

let renderSection = (title, section) => `## ${title}\n${section}\n\n`;

let renderTestSection = test => `## Test \n Use testing Library: ${test}\n\n`;

let renderContactSection = (github, email) => `## Contact \n Github User Page: https://github.com/${github} \n\n E-mail me: ${email}`;

function generateMarkdown({ title, description, installation, usage, license, test, github, email }) {
    let md = '';

    md += renderLicenseBadge(license);
    md += renderTitle(title);
    md += renderTableContents(license);
    md += renderSection('Description', description);
    md += renderSection('Installation', installation);
    md += renderSection('Usage', usage);
    md += renderLicenseSection(license);
    md += renderTestSection(test);
    md += renderContactSection(github, email);
    return md;
}

module.exports = generateMarkdown;