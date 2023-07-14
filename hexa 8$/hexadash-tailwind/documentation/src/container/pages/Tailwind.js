import { Col, Row } from 'antd';
import Prism from "prismjs";
import { useEffect } from 'react';
import { Cards } from '../../components/cards/frame/cards-frame';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { DocumentationStyleWrap } from './style';

const Tailwind = () => {
  const PageRoutes = [
    {
        path: 'index',
        breadcrumbName: 'Docs',
    },
    {
        path: '',
        breadcrumbName: 'Redux',
    },
  ];
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Tailwind" routes={PageRoutes} />
      <Main>
        <DocumentationStyleWrap>
          <Row gutter={25}>
            <Col md={18} xs={24}>
              <Cards headless>
                <div className="ninjadash-template-documentation">
                    <h2>Get Started</h2>
                    <p className="mb-0"> Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.</p>
                    <p>It's fast, flexible, and reliable — with zero-runtime.</p>
                    <h2>To setup Tailwind CSS , please follow the below steps:</h2>
                    <p className="mb-0">The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The CLI is also available as a standalone executable if you want to use it without installing Node.js.</p>
                    <p className="mb-0"><b>1. Install Tailwind CSS</b></p>
                    <p>Install <b>tailwindcss</b> via npm, and create your <b>tailwind.config.js</b> file.</p>
                    <div className="docs-highlighter mb-35">
                        <pre>
                            <code className="language-javascript">
{
`
npm install -D tailwindcss
npx tailwindcss init

`
}
                            </code>
                        </pre>
                    </div>
                    <p className="mb-0"><b>2. Configure your template paths</b></p>
                    <p>Add the paths to all of your template files in your <b>tailwind.config.js</b> file.</p>
                    <div className="docs-highlighter mb-35">
                        <pre>
                            <code className="language-javascript">
{
`
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

`
}
                            </code>
                        </pre>
                    </div>
                    <p className="mb-0"><b>3. Add the Tailwind directives to your CSS</b></p>
                    <p>Add the <b>@tailwind </b>directives for each of Tailwind’s layers to your main CSS file.</p>
                    <div className="docs-highlighter mb-35">
                        <pre>
                            <code className="language-javascript">
{
`
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

`
}
                            </code>
                        </pre>
                    </div>
                    <p className="mb-0"><b>4. Start the Tailwind CLI build process</b></p>
                    <p>Run the CLI tool to scan your template files for classes and build your CSS.</p>
                    <div className="docs-highlighter mb-35">
                        <pre>
                            <code className="language-javascript">
{
`
  npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

`
}
                            </code>
                        </pre>
                    </div>
                    <p className="mb-0"><b>5. Start using Tailwind in your HTML</b></p>
                    <p>Add your compiled CSS file to the <b>`head`</b> and start using Tailwind’s utility classes to style your content.</p>
                    <div className="docs-highlighter mb-35">
                        <pre>
                            <code className="language-javascript">
{
`
  <!doctype html>
  <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="/dist/output.css" rel="stylesheet">
    </head>
    <body>
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
    </body>
  </html>

`
}
                            </code>
                        </pre>
                    </div>
                </div>
              </Cards>
              <Cards headless>
                <div className="ninjadash-template-documentation">
                    <h2>Editor Setup</h2>
                    <p>Plugins and configuration settings that can improve the developer experience when working with Tailwind CSS.</p>
                    <h3>Syntax support</h3>
                    <p>Tailwind CSS uses a lot of custom CSS at-rules like <b>@tailwind, @apply, and @screen</b>, and in many editors this can trigger warnings or errors where these rules aren’t recognized.</p>

                    <p>The solution to this is almost always to install a plugin for your editor/IDE for PostCSS language support instead of regular CSS.</p>

                    <p>If you’re using VS Code, our official <a href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss" target="_blank" rel="noreferrer">Tailwind CSS IntelliSense</a> plugin includes a dedicated Tailwind CSS language mode that has support for all of the custom at-rules and functions Tailwind uses.</p>

                    <p>In some cases, you may need to disable native CSS linting/validations if your editor is very strict about the syntax it expects in your CSS files.</p>
                </div>
              </Cards>
              <Cards headless>
                <div className="ninjadash-template-documentation">
                    <h2>Theme Configuration</h2>
                    <p>The <b>theme</b> section of your <b>tailwind.config.js</b> file is where you define your project’s color palette, type scale, fonts, breakpoints, border radius values, and more.</p>
                    <div className="docs-highlighter mb-35">
                        <pre>
                            <code className="language-javascript">
{
`
  module.exports = {
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    }
  }

`
}
                            </code>
                        </pre>
                    </div>
                  </div>
                </Cards>
                <Cards headless>
                  <h3>For More Information. Visit <a href="https://tailwindcss.com/docs/installation" target="_blank" rel="noreferrer">Tailwind CSS</a></h3>
                </Cards>
            </Col>
          </Row>
        </DocumentationStyleWrap>

      </Main>
    </>
  );
};

export default Tailwind;
