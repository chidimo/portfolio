/* eslint-disable no-unused-vars */
import React from 'react';
import { RouteComponentProps } from '@reach/router';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';

import { Project } from './Project';
import { projectsData } from './projectsData';

export const ProjectsPage = (props: RouteComponentProps) => {
  return (
    <Container>
      {projectsData.map((p, index) => {
        const { title, description, stack, category } = p;
        return (
          <Accordion key={index} defaultActiveKey="0">
            <Project
              index={index}
              title={title}
              stack={stack}
              category={category}
              description={description}
            />
          </Accordion>
        );
      })}

      <div id="fs" className="tech">
        <div className="tech_name">
          <h2>Full Stack Apps (Frontend + Backend)</h2>
        </div>
        <div className="tech_projects">
          <div className="fs_projects card">
            <h4 className="app_name">
              Quick Credit (<code>Express</code> + <code>HTML5</code> +{' '}
              <code>CSS3</code> + <code>JavaScript</code>)
            </h4>
            <p className="app_description">
              Quick Credit is an online lending platform that provides short
              term soft loans to individuals. This helps solve problems of
              financial inclusion as a way to alleviate poverty and empower low
              income earners.
              <br />
              <br />
              Currently, on the frontend app, only the authentication endpoints
              have been wired to the backend.
            </p>
            <p className="stack">
              Stack: <code>Express</code>, <code>HTML5</code>, <code>CSS3</code>
              , <code>JavaScript</code>
            </p>
            <div className="project_links">
              <a href="https://chidimo.github.io/Quick-Credit/UI/index.html">
                Frontend App
              </a>
              <a href="https://qcredit.herokuapp.com/api/v1/">Backend App</a>
              <hr />
              <a href="https://github.com/chidimo/Quick-Credit">Github repo</a>
              <a href="https://qcredit.docs.apiary.io/">API documentation</a>
            </div>
          </div>
          <div className="django_projects card">
            <h4 className="app_name">
              Ethodoxy (<code>Djangorestframework</code> + <code>React</code>)
            </h4>
            <p className="app_description">
              The name is a short form for Electronic Orthodoxy. The current
              database features the <strong>Douay-Rheims</strong> version of the
              bible and the <strong>Challoner</strong> commentary.
              <br />
              <br />
              The app exposes a set of API endpoints, and the frontend app
              consumes these endpoints. These are still works in progress.
            </p>
            <p className="stack">
              Stack: <code>Django</code>, <code>React</code>
            </p>
            <div className="project_links">
              <a href="http://chidimo.github.io/Ethodoxy/">Frontend app</a>
              <a href="https://ethodoxy.herokuapp.com/api/v1">Backend App</a>
              <hr />
              <a href="https://github.com/chidimo/ethodoxy-api">Backend Repo</a>
              <a href="https://github.com/chidimo/Ethodoxy">Frontend Repo</a>
              <a href="https://ethodoxy.herokuapp.com/swagger/">
                API documentation
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="react" className="tech">
        <div className="tech_name">
          <h2>React apps</h2>
        </div>
        <div className="tech_projects">
          <div className="react_projects card">
            <h4 className="app_name">
              <code>react-drag-drop-browser</code>
            </h4>
            <p className="app_description">
              Simple, customizable react drag and drop component. Also comes
              with a file browser.
              <br />
              It is highly configurable in terms of styling. Do checkout the
              docs on the Github repo.
            </p>
            <p className="stack">
              Stack: <code>React</code>
            </p>
            <div className="project_links">
              <a href="https://codesandbox.io/s/react-drag-drop-browser-demo-6j6rl">
                Demo app
              </a>
              <hr />
              <a href="https://github.com/chidimo/react-drag-drop-browser">
                Github Repo
              </a>
            </div>
          </div>
          <div className="react_projects card">
            <h4 className="app_name">My Reads</h4>
            <p className="app_description">
              A simple book tracking app which I built as part of my{' '}
              <code>React</code>
              nanodegree program at Udacity.
            </p>
            <p className="stack">
              Stack: <code>React</code>
            </p>
            <div className="project_links">
              <a href="https://react-shelf.herokuapp.com">App link</a>
              <hr />
              <a href="https://github.com/chidimo/My-Reads">Github Repo</a>
            </div>
          </div>
          <div className="react_projects card">
            <h4 className="app_name">Would You Rather</h4>
            <p className="app_description">
              A would you rather game I built as part of my <code>React</code>
              nanodegree program at Udacity. Game description is available in
              the repo.
            </p>
            <p className="stack">
              Stack: <code>React</code>, <code>Redux</code>
            </p>
            <div className="project_links">
              <a href="https://wud-u-rada.herokuapp.com/">App link</a>
              <hr />
              <a href="https://github.com/chidimo/Would-You-Rather">
                Github Repo
              </a>
            </div>
          </div>
          <div className="react_projects card">
            <h4 className="app_name">Url shortener</h4>
            <p className="app_description">
              URL shortening service with automatic redirects.
            </p>
            <p className="stack">
              Stack: <code>React</code>, <code>Meteor</code>,{' '}
              <code>MongoDB</code>
            </p>
            <div className="project_links">
              <a href="https://basic-url-shortener.herokuapp.com">App link</a>
              <hr />
              <a href="https://github.com/chidimo/Url-Shortener">Github Repo</a>
            </div>
          </div>
        </div>
      </div>
      <div id="react_native" className="tech">
        <div className="tech_name">
          <h2>React Native apps</h2>
        </div>
        <div className="tech_projects">
          <div className="mobile_apps card">
            <h4 className="app_name">Mobile Flashcards</h4>
            <p className="app_description">
              A flashcard app for iOS and Android
            </p>
            <p className="stack">
              Stack: <code>React Native</code>, <code>Redux</code>
            </p>
            <div className="project_links">
              <a href="https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40chidimo/mobile-flashcards-4b30376ce6d240bb9de13b6b11c19b7c-signed.apk">
                Android app
              </a>
              <hr />
              <a href="https://github.com/chidimo/Mobile-Flashcards">
                Github Repo
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="meteor" className="tech">
        <div className="tech_name">
          <h2>Meteor apps</h2>
        </div>
        <div className="tech_projects">
          <div className="mobile_apps card">
            <h4 className="app_name">Currency Analyzer</h4>
            <p className="app_description">
              A currency counting app. Available for web and mobile
            </p>
            <p className="stack">
              Stack: <code>React</code>, <code>Meteor</code>
            </p>
            <div className="project_links">
              <a href="https://play.google.com/store/apps/details?id=com.currency.analyzer">
                Android app
              </a>
              <a href="http://currency-analyzer.herokuapp.com/">Web app</a>
              <hr />
              <a href="https://github.com/chidimo/Currency-Analyzer">
                Github Repo
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="django" className="tech">
        <div className="tech_name">
          <h2>Django apps</h2>
        </div>
        <div className="tech_projects">
          <div className="django_projects card">
            <h4 className="app_name">ChoralCentral</h4>
            <p className="app_description">
              The app is a place for sharing choral music sheets and midi files.
            </p>
            <p className="stack">
              Stack: <code>Django</code>, <code>Bootstrap</code>
            </p>
            <div className="project_links">
              <a href="https://github.com/chidimo/ChoralCentral">Github Repo</a>
              <a href="https://www.choralcentral.net/">App link</a>
            </div>
          </div>
          <div className="django_projects card">
            <h4 className="app_name">FunnShopp</h4>
            <p className="app_description">
              An Enterprise Resource Planning (ERP) system
            </p>
            <p className="stack">
              Stack: <code>Django</code>, <code>Bootstrap</code>
            </p>
            <div className="project_links">
              <a href="https://www.funnshopp.com">App link</a>
              <hr />
              <a href="https://github.com/chidimo/FunnShopp">Github Repo</a>
            </div>
          </div>
          <div className="django_projects card">
            <h4 className="app_name">Voidcoin</h4>
            <p className="app_description">
              A simple blockchain implementation in python
            </p>
            <p className="stack">
              Stack: <code>Python</code>, <code>Django</code>,{' '}
              <code>Bootstrap</code>
            </p>
            <div className="project_links">
              <a href="http://voidcoin.herokuapp.com/">App link</a>
              <hr />
              <a href="https://github.com/chidimo/voidcoin">Github Repo</a>
            </div>
          </div>
          <div className="django_projects card">
            <h4 className="app_name">YouTube and Drive API v3</h4>
            <p className="app_description">
              Request YouTube and/or Google Drive access from within a Django
              web app
            </p>
            <p className="stack">
              Stack: <code>Django</code>, <code>YouTube API v3</code>,{' '}
              <code>Drive API v3</code>
            </p>
            <div className="project_links">
              <a href="https://github.com/chidimo/voidcoin">Github Repo</a>
            </div>
          </div>
        </div>
      </div>
      <div id="python" className="tech">
        <div className="tech_name">
          <h2>Python apps</h2>
        </div>
        <div className="tech_projects">
          <div className="python_app card">
            <h4 className="app_name">Python-git</h4>
            <p className="app_description">
              This project aims to control <code>git.exe</code> with{' '}
              <code>python</code>'s <code>subprocess</code> module.
              <a href="./media/REPO_STATUS_@_Thu_25_Oct_2018_10_30_32_AM.pdf">
                Here
              </a>{' '}
              is a sample output of the report it generates for a repo status
              command.
            </p>
            <div className="project_links">
              <a href="https://github.com/chidimo/python-git">Github Repo</a>
            </div>
          </div>
          <div className="python_app card">
            <h4 className="app_name">Hack nairaland</h4>
            <p className="app_description">
              An exercise in webscraping using nairaland.com as a case study
            </p>
            <div className="project_links">
              <a href="https://github.com/chidimo/hack-nairaland">
                Github Repo
              </a>
            </div>
          </div>
          <div className="python_app card">
            <h4 className="app_name">Pywebber</h4>
            <p className="app_description">
              Web development tools written in python
            </p>
            <div className="project_links">
              <a href="https://github.com/chidimo/pywebber">Github Repo</a>
            </div>
          </div>
          <div className="python_app card">
            <h4 className="app_name">Project Euler</h4>
            <p className="app_description">
              Adventures in algorithm design and analysis
            </p>
            <div className="project_links">
              <a href="https://github.com/chidimo/Project-Euler-Sulutions">
                Github Repo
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="ds" className="tech">
        <div className="tech_name">
          <h2>Datascience projects</h2>
        </div>
        <div className="tech_projects">
          <div className="ds_projects card">
            <h4 className="app_name">Line of Balance</h4>
            <p className="app_description">
              Plotting a line of balance plot/curve (in project management)
              using matplotlib
            </p>
            <div className="project_links">
              <a href="https://github.com/chidimo/line_of_balance">
                Github Repo
              </a>
              <a href="https://github.com/chidimo/line_of_balance/blob/master/graph.pdf">
                Sample PDF plot
              </a>
            </div>
          </div>
          <div className="ds_projects card">
            <h4 className="app_name">Olympic medals</h4>
            <p className="app_description">
              Analysing olympic gold medals from a wikipedia dataset
            </p>
            <div className="project_links">
              <a href="https://github.com/chidimo/ds/blob/master/coursera_pandas/Week%202%20solution.ipynb">
                Github Repo
              </a>
            </div>
          </div>
          <div className="ds_projects card">
            <h4 className="app_name">Energy and GDP</h4>
            <p className="app_description">
              Analysing energy and GDP data of various countries
            </p>
            <div className="project_links">
              <a href="https://github.com/chidimo/ds/blob/master/coursera_pandas/Week%203%20solution.ipynb">
                Github Repo
              </a>
            </div>
          </div>
          <div className="ds_projects card">
            <h4 className="app_name">Hypothesis testing</h4>
            <p className="app_description">
              Testing a hypothesis via data analysis
            </p>
            <div className="project_links">
              <a href="https://github.com/chidimo/ds/blob/master/coursera_pandas/Week%204%20solution.ipynb">
                Github Repo
              </a>
            </div>
          </div>
          <div className="ds_projects card">
            <h4 className="app_name">GDP and Inflation by year</h4>
            <p className="app_description">
              Variation of GDP and Inflation rate of Nigeria and UAE between
              2005 and 2016
            </p>
            <div className="project_links">
              <a href="https://github.com/chidimo/ds/blob/master/coursera_matplotlib/Week4_solution.ipynb">
                Github Repo
              </a>
              <a href="https://github.com/chidimo/ds/blob/master/coursera_matplotlib/output/comparing_gdp_inflation.pdf">
                Sample PDF plot
              </a>
            </div>
          </div>
          <div className="ds_projects card">
            <h4 className="app_name">Temperature highs and lows</h4>
            <p className="app_description">
              Plotting temperature highs and lows for every calendar day of the
              year in Abu Dhabi, UAE for the ten-year period, 20052014
            </p>
            <div className="project_links">
              <a href="https://github.com/chidimo/ds/blob/master/coursera_matplotlib/Week2_solution.ipynb">
                Github Repo
              </a>
              <a href="https://github.com/chidimo/ds/blob/master/coursera_matplotlib/output/Temperature_Abu_Dhabi.pdf">
                Sample PDF plot
              </a>
            </div>
          </div>
          <div className="ds_projects card">
            <h4 className="app_name">Visualization</h4>
            <p className="app_description">
              Building a custom visualization from probabilistic data generated
              through samples in matplotlib
            </p>
            <div className="project_links">
              <a href="https://github.com/chidimo/ds/blob/master/coursera_matplotlib/Week3_solution.ipynb">
                Github Repo
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="gis" className="tech">
        <div className="tech_name">
          <h2>GIS (ArcGIS Desktop) projects</h2>
        </div>
        <div className="tech_projects">
          <div className="gis_projects card">
            <h4 className="app_name">Visualizing voting pattern</h4>
            <p className="app_description">
              The "yes" vote patterns in California Counties on Proposition 37
              in 2012
            </p>
            <div className="project_links">
              <a href="https://s3.amazonaws.com/coursera-uploads/peer-review/hESqA3EhEeWIfhKr_WcYsQ/514eb4ec558f3dea849094aec6a5eec0/California_Counties_Prop37_2012_Voting_Patterns.pdf">
                Map PDF
              </a>
            </div>
          </div>
          <div className="gis_projects card">
            <h4 className="app_name">Moving Valmeyer</h4>
            <p className="app_description">
              Map showing the location of the new and old Valmeyer towns
            </p>
            <div className="project_links">
              <a href="http://arcg.is/2cPzy9r">Map PDF</a>
            </div>
          </div>
          <div className="gis_projects card">
            <h4 className="app_name">Visualizing ozone concentrations</h4>
            <p className="app_description">
              Map of Hourly Average Ozone Concentrations around California in
              2010-2011
            </p>
            <div className="project_links">
              <a href="https://s3.amazonaws.com/coursera-uploads/peer-review/zs3YSHQ6EeWrAxJQXw-8PQ/debaf9f5b41d0fe5707f52283be9ea8c/Ozone_Concentrations.pdf">
                Map PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
