// Octicon React component library has been imported from
// Ref: https://github.com/primer/octicons/tree/master/lib/octicons_react

import Octicon, { MarkGithub } from "@githubprimer/octicons-react";
import * as React from "react";
export interface IFooterProps {
  githubRepoUrl: string;
}
/**
 * Builds the sticky footer with the link to the GitHub Repo
 * @param props GithubRepoUrl -- Url of the github repo
 * @example
 *   <Footer githubRepoUrl="https://github.com/<username>/<repo>" />
 */
const Footer: React.SFC<IFooterProps> = (props: IFooterProps) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            &copy;&nbsp;Rajiv Karthik Yanamandra&nbsp; 2018
          </div>
          <div className="col-sm">
            <a className="nav-link" href={props.githubRepoUrl}>
              <Octicon icon={MarkGithub} size="medium" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
