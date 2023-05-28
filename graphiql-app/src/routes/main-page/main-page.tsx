import './main-page.scss';
import RequestEditor from '../../components/request-editor';
import ResponseSection from '../../components/response-section';
import VariablesEditor from '../../components/variables-editor/variables-editor';
import { Resizable } from 're-resizable';
import { Suspense, lazy } from 'react';
import Spinner from '../../components/spinner';

export default function MainPage() {
  const DocumentationExplorer = lazy(() => import(`../../components/documentation-explorer`));

  return (
    <>
      <div className="main-graphql-container container">
        <div className="graphql-container">
          <Resizable
            className="documentation-explorer-container card border-dark mb-3"
            defaultSize={{ width: '30%', height: 600 }}
            enable={{
              top: false,
              right: true,
              bottom: false,
              left: true,
              topRight: false,
              bottomRight: false,
              bottomLeft: false,
              topLeft: false,
            }}
          >
            <Suspense fallback={<Spinner />}>
              <DocumentationExplorer />
            </Suspense>
          </Resizable>

          <Resizable
            className="request-editor-container"
            defaultSize={{ width: '30%', height: 600 }}
            enable={{
              top: false,
              right: true,
              bottom: false,
              left: false,
              topRight: false,
              bottomRight: false,
              bottomLeft: false,
              topLeft: false,
            }}
          >
            <RequestEditor />
            <VariablesEditor />
          </Resizable>

          <Resizable
            className="response-section card border-dark mb-3"
            defaultSize={{ width: '30%', height: 600 }}
            enable={{
              top: false,
              right: true,
              bottom: false,
              left: false,
              topRight: false,
              bottomRight: false,
              bottomLeft: false,
              topLeft: false,
            }}
          >
            <ResponseSection />
          </Resizable>
        </div>
      </div>
    </>
  );
}
