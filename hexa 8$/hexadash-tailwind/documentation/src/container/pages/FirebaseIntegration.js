import { Col, Row } from 'antd';
import Prism from "prismjs";
import { useEffect } from 'react';
import { Cards } from '../../components/cards/frame/cards-frame';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { DocumentationStyleWrap } from './style';

const Navigation = () => {
  const PageRoutes = [
    {
        path: 'index',
        breadcrumbName: 'Docs',
    },
    {
        path: '',
        breadcrumbName: 'Axios Integration',
    },
  ];
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Axios Integration" routes={PageRoutes} />
      <Main>
        <DocumentationStyleWrap>
          <Row gutter={25}>
            <Col xs={24}>
              <Cards headless>
                <div className="ninjadash-template-documentation">
                    <h2>Firebase Integration</h2>
                    <p className="highlighter mb-5">Basically Firebase use for:</p>
                    <ul>
                        <li>Email and password authentication with Firebase.</li>
                        <li>Social authentication with Facebook and Google, Twitter etc..</li>
                        <li>Manage Complete Database on Cloud</li>
                        <li>Hosting</li>
                        <li>Password recovery</li>
                        <li>Verification emails</li>
                        <li>Storing and accessing the authentication state using the browser's localStorage</li>
                        <li>There are also many other use of firebase that you can find from reference which we have attach below.</li>
                    </ul>
                    <p className="mb-0">Recent versions of Node.js and NPM. You can install them from their official website, React Cli installed (npm install -g create-react-app)</p>
                    <p className="highlighter">Let's follow below step to secure your application</p>
                    <h2>Step 1:</h2>
                    <p className="mb-5"> <strong>1. Setup firebase project in firebase console.</strong></p>
                    <img  src={require(`../../static/img/1.png`)} alt="ninjadash dashboard" />
                    <p className="mt-10">Click on Get Started button</p>
                    <p className="mb-5"> <strong>2. Add new project</strong></p>
                    <img  src={require(`../../static/img/2.png`)} alt="ninjadash dashboard" />
                    <p className="mt-10">Create new project</p>
                    <img  src={require(`../../static/img/3.png`)} alt="ninjadash dashboard" />
                    <p className="mt-10">Accept the controler-terms and click on Create Project</p>
                    <p> <strong>3. Go to Develop Authentication</strong> </p>
                    <p> <strong>4. Get config object for your web app</strong></p>
                    <h2>To get the config object for a Firebase Web App:</h2>
                    <p className="mb-5"> Click the Settings icon, then select Project settings.</p>
                    <img  src={require(`../../static/img/24.png`)} alt="ninjadash dashboard" />
                    <p className="mt-10"><strong>Go to the web app</strong></p>
                    <img  src={require(`../../static/img/19.png`)} alt="ninjadash dashboard" />
                    <p className="mt-10">In Your apps card, select the nickname of the app for which you need a config object.</p>
                    <img  src={require(`../../static/img/20.png`)} alt="ninjadash dashboard" />
                    <p className="mt-10">Select Config from the Firebase SDK snippet pane.</p>
                    <img  src={require(`../../static/img/21.png`)} alt="ninjadash dashboard" />
                    <img  src={require(`../../static/img/22.png`)} alt="ninjadash dashboard" />
                    <img  src={require(`../../static/img/23.png`)} alt="ninjadash dashboard" />
                    <p className="mt-10 mb-0">Copy the config object snippet, then add it to your app's HTML.</p>
                    <div className="docs-highlighter">
                        <pre>
                            <code className="language-javascript">
{
`
import actions from './actions';
import { DataService } from '../../../config/dataService/dataService';
`
}
                            </code>
                        </pre>
                    </div>
                    <p>copy config add on config.txt</p>
                    <p className="mb-5"><strong>5. Next, you'll need to enable Email authentication from the authentication Sign-in method tab:</strong> </p>
                    <img src={require(`../../static/img/5.png`)} alt="ninjadash dashboard" />
                    <p className="mt-10">6. Go to sign in method</p>
                    <img  src={require(`../../static/img/6.png`)} alt="ninjadash dashboard" />
                    <p className="mt-10">Make disble toggle to enable, and save changes</p>
                    <img  src={require(`../../static/img/7.png`)} alt="ninjadash dashboard" />
                    <img  src={require(`../../static/img/25.png`)} alt="ninjadash dashboard" />
                    <p className="mt-10">7. Go to the authentication Users tab then click on the Add user button and genarate email and password:</p>
                    <img  src={require(`../../static/img/8.png`)} alt="ninjadash dashboard" />
                    <img  src={require(`../../static/img/11.png`)} alt="ninjadash dashboard" />
                    <h2 className="mt-35">Step 2:</h2>
                    <p className="mb-0"><strong>Installing Firebase in React</strong></p>
                    <div className="docs-highlighter mb-35">
                        <pre>
                            <code className="language-javascript">
{
`yarn add firebase
`
}
                            </code>
                        </pre>
                    </div>
                    <p className="mb-0">2. Here .env file. Add your firebase credential for using NinjaDash with firebase and restart your app. Don't change defined variables.</p>
                    <img  src={require(`../../static/img/firebase1.png`)} alt="ninjadash dashboard" />
                    <p className="mb-0 mt-35">This config file manage inside the src config  database firebase.js file</p>
                    <div className="docs-highlighter mb-35">
                        <pre>
                            <code className="language-javascript">
{
`import * as firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
`
}
                            </code>
                        </pre>
                    </div>
                    <p  className="mb-5">3. If you are using Application with Firebase and you might get error from Firebase Database. Message like (FirebaseError : Missing or insufficient permissions).
                    The security rules read/write set as false means no one has access to the database.</p>
                    <img className="mb-35" src={require(`../../static/img/s4.png`)} alt="ninjadash dashboard" />
                    <div className="docs-highlighter">
                        <pre>
                            <code className="language-javascript">
{
`service cloud.firestore {
  match /databases/{database}/documents {
      match /{document=**} {
      allow read, write: if false;
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
            </Col>
          </Row>
        </DocumentationStyleWrap>
        
      </Main>
    </>
  );
};

export default Navigation;
