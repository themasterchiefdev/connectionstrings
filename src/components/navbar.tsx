// Octicon React component library has been imported from
// Ref: https://github.com/primer/octicons/tree/master/lib/octicons_react

import Octicon, { MarkGithub } from "@githubprimer/octicons-react";
import * as React from "react";
import { Component } from "react";

// Props to set the header value
export interface INavbarProps {
  header: string;
  githubRepoUrl: string;
}

/**
 * Define Webpage header
 * @param {string} header - Text to be displayed as Header
 * @param {string} githubRepoUrl - Link to the Github repository
 * @example
 *  <Navbar header="Insert Webpage Header"  githubRepoUrl="https://github.com/<username>/<RepoName>"/>
 */
// Octicon Component has been imported from Octicon react library
class Navbar extends Component<INavbarProps, {}> {
  constructor(props: INavbarProps) {
    super(props);
  }
  public render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="#">
          {this.props.header}
        </a>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
            <li className="nav-item">
              <a className="nav-link" href={this.props.githubRepoUrl}>
                <Octicon icon={MarkGithub} size="medium" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
