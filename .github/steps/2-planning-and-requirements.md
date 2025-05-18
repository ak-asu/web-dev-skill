# Step 2: Project Planning & Requirements

_You did "Web Fundamentals"! :tada:_

This chapter provides a comprehensive guide to planning and defining requirements for a portfolio website, tailored for beginners in web development. A portfolio site showcases a developer’s skills, projects, and experience to potential employers or clients. Effective planning ensures the site meets its goals, is user-friendly, and stands out in a competitive landscape. We’ll cover the Software Development Life Cycle (SDLC), requirement gathering techniques, project scope definition, user stories with acceptance criteria, and designing a Software Requirements Specification (SRS) document.

## :keyboard: Activity: Chapter Tasks

1. Once you've reviewed the material, open the `resources/Quiz2.md` file to take the quiz.
2. Complete the SRS document template provided in the [`resources/SRS.md`](https://github.com/ak-asu/web-dev-skill/blob/main/resources/SRS.md) file. This will help you practice writing a Software Requirements Specification for your portfolio site.

   - **Note**: The SRS document is a critical part of the planning process, ensuring clarity and alignment among stakeholders.

Remember: There's no need to create a new branch - simply edit the quiz file, commit your changes, and push them to the main branch.

## 1. Introduction to Project Planning & Requirements

Project planning and requirement definition are foundational steps in web development. They clarify what the project aims to achieve, who it serves, and how it will be built. For a portfolio site, planning ensures the site effectively communicates your professional value, is easy to navigate, and meets user expectations.

### Why Planning Matters
- **Clarity**: Defines goals, such as attracting job offers or freelance clients.
- **Efficiency**: Prevents scope creep and wasted effort by setting boundaries.
- **User Focus**: Ensures the site addresses the needs of its audience, like hiring managers or peers.
- **Quality**: Aligns development with best practices, enhancing functionality and design.

### What This Chapter Covers
- **SDLC**: Understanding the development process and methodologies like Agile.
- **Requirement Gathering**: Using user personas, success criteria, and competitor analysis.
- **Project Scope**: Defining content sections and features.
- **User Stories**: Capturing user needs and acceptance criteria.
- **SRS Document**: Formalizing requirements for clear communication.

## 2. Understanding the Software Development Life Cycle (SDLC)

The Software Development Life Cycle (SDLC) is a structured process for planning, designing, building, testing, and maintaining software. It ensures projects are completed systematically and meet quality standards. For a portfolio site, the SDLC provides a roadmap from ideation to deployment.

### SDLC Phases
- **Planning**: Define goals, resources, and timelines.
- **Requirements Analysis**: Gather and document user needs.
- **Design**: Create wireframes and technical specifications.
- **Development**: Write code for the site.
- **Testing**: Verify functionality and performance.
- **Deployment**: Launch the site.
- **Maintenance**: Update and fix issues post-launch.

### Common SDLC Models
- **Waterfall**: Sequential phases, ideal for projects with fixed requirements. Each phase (e.g., requirements, design) completes before the next begins. Less flexible for changes.
- **Agile**: Iterative and collaborative, with frequent feedback. Requirements evolve through sprints, making it suitable for web projects like a portfolio site.
- **Iterative**: Develops the project in small, repeated cycles, refining each iteration.
- **Spiral**: Combines iterative development with risk assessment, used for complex projects.

### Agile Development for Web Projects
Agile emphasizes flexibility, user feedback, and incremental delivery. For a portfolio site:
- **Sprints**: Short development cycles (e.g., 1-2 weeks) to build features like the Projects section.
- **Backlog**: A prioritized list of tasks, such as adding a theme toggle.
- **Collaboration**: Regular check-ins with stakeholders (e.g., peers for feedback).
- **Adaptability**: Adjust features based on user testing or new ideas.

Agile suits small projects because it allows quick iterations and incorporates feedback early, ensuring the site aligns with user needs. Learn more at [Atlassian’s SDLC Guide](https://www.atlassian.com/agile/software-development/sdlc).

## 3. Requirement Gathering

Requirement gathering involves identifying the needs and expectations of the site’s users and stakeholders. For a portfolio site, this means understanding what potential employers, clients, or peers want to see and how they’ll interact with the site.

### User Personas
User personas are fictional representations of target users, capturing their goals, needs, and behaviors. They guide design and content decisions.

#### Creating User Personas
1. **Identify Users**: Consider hiring managers, clients, or fellow developers.
2. **Gather Data**: Interview peers or research job postings to understand needs.
3. **Define Characteristics**: Include name, role, goals, pain points, and technical proficiency.

#### Example Persona
| **Attribute**       | **Details**                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| **Name**            | Jane Doe                                                                   |
| **Role**            | Senior Hiring Manager at TechCorp                                          |
| **Age**             | 35                                                                         |
| **Goals**           | Find qualified developers for software roles                                |
| **Needs**           | Clear display of skills, project examples, and contact information          |
| **Pain Points**     | Resumes lack practical skill evidence; hard to assess coding ability        |
| **Tech Proficiency**| Familiar with web navigation, uses Chrome on desktop and mobile             |

Another persona might be a freelance client seeking a developer for a specific project, needing detailed project descriptions and a contact form.

### Success Criteria
Success criteria are measurable standards to evaluate the project’s success. They align with project goals and user needs.

#### Examples for Portfolio Site
- **Performance**: Site loads within 2 seconds on average (measured with tools like Google Lighthouse).
- **Engagement**: 80% of visitors view the Projects section (tracked via analytics).
- **Feedback**: Positive feedback from at least 5 peers or employers within 1 month of launch.
- **Functionality**: All links and forms work without errors.
- **Accessibility**: Meets WCAG 2.1 Level AA standards for inclusivity.

These criteria ensure the site is effective and user-friendly. See [Smartsheet’s Success Criteria Guide](https://www.smartsheet.com/content/project-success-criteria) for more.

### Competitor Analysis
Competitor analysis involves studying similar portfolio sites to identify strengths, weaknesses, and opportunities for differentiation.

#### Steps for Analysis
1. **Select Competitors**: Choose 3-5 portfolio sites of developers in your field (e.g., front-end developers).
2. **Evaluate Key Aspects**:
   - **Design**: Layout, color scheme, typography.
   - **Content**: Sections included (e.g., About, Projects), depth of information.
   - **Functionality**: Features like theme toggles, contact forms, or interactive elements.
   - **User Experience**: Navigation ease, mobile responsiveness.
3. **Document Findings**: Note what works well (e.g., clean project showcases) and what doesn’t (e.g., cluttered layouts).
4. **Apply Insights**: Incorporate strengths (e.g., clear project filters) and avoid weaknesses (e.g., slow load times).

#### Example Findings
| **Site**       | **Strengths**                              | **Weaknesses**                          |
|----------------|--------------------------------------------|-----------------------------------------|
| DevPortfolio1  | Interactive project demos, clean design    | No contact form, poor mobile layout     |
| DevPortfolio2  | Detailed skill breakdown, fast load time   | Outdated projects, no certifications    |
| DevPortfolio3  | Strong About section, theme toggle         | Confusing navigation, no social links   |

Use these insights to prioritize features like a responsive design and a robust Projects section. For tips, visit [WebFX’s Competitor Analysis Guide](https://www.webfx.com/blog/web-design/competitor-website-analysis/).

## 4. Defining Project Scope

The project scope defines what is included in the project, including deliverables, features, and constraints. It prevents scope creep and ensures alignment among stakeholders.

### Components of Project Scope
- **Goals**: Showcase skills and attract opportunities.
- **Deliverables**: A live portfolio site with specific sections.
- **Features**: Functional elements like navigation and theme toggle.
- **Constraints**: Budget, timeline, or technology limitations.
- **Exclusions**: Features not included, like a blog or e-commerce.

### Portfolio Site Scope
#### Content Sections
- **About**: Biography, photo, and professional summary.
- **Skills**: List of technical (e.g., HTML, CSS, JavaScript) and soft skills.
- **Projects**: Showcase of 3-5 projects with titles, descriptions, images, and links.
- **Certifications**: Display of relevant credentials (e.g., freeCodeCamp, Coursera).
- **Contact**: Form or details for reaching out (e.g., email, LinkedIn).

#### Features
- **Theme Toggle**: Switch between light and dark modes for accessibility.
- **Responsive Design**: Adapts to desktop, tablet, and mobile devices.
- **Social Media Integration**: Links to GitHub, LinkedIn, or X profiles.
- **Navigation Menu**: Easy access to all sections.

#### Constraints
- **Timeline**: Complete within 4 weeks.
- **Budget**: Minimal, using free hosting (e.g., GitHub Pages).
- **Technology**: Built with HTML, CSS, JavaScript, and optional frameworks like Bootstrap.

For scope management tips, see [Asana’s Project Scope Guide](https://asana.com/resources/project-scope).

## 5. Writing User Stories and Acceptance Criteria

User stories and acceptance criteria capture user needs in a clear, actionable format, commonly used in Agile development.

### User Stories
A user story follows the format: “As a [user role], I want to [goal] so that [reason].” It focuses on user value.

#### Examples for Portfolio Site
- **Story 1**: As a hiring manager, I want to see the developer’s projects so that I can assess their skills and experience.
- **Story 2**: As a visitor, I want to switch between light and dark themes so that I can view the site comfortably in different lighting.
- **Story 3**: As a potential client, I want to contact the developer easily so that I can discuss project opportunities.

### Acceptance Criteria
Acceptance criteria define the conditions for a user story to be considered complete. They are specific, testable, and clear.

#### Example for Story 1
- The Projects section displays at least three projects with titles, descriptions, and images.
- Each project includes a link to a live demo or GitHub repository.
- Projects are organized in a grid layout, responsive to screen size.

#### Example for Story 2
- A theme toggle button is visible on all pages.
- Clicking the button switches between light and dark modes instantly.
- The selected theme persists across page reloads using local storage.

For more examples, explore [Smartsheet’s User Story Examples](https://www.smartsheet.com/content/user-story-with-acceptance-criteria-examples).

## 6. Creating a Software Requirements Specification (SRS) Document

A Software Requirements Specification (SRS) document formalizes the project’s requirements, serving as a contract between stakeholders and developers. It ensures everyone understands what the site will do and how it will perform.

### Purpose of an SRS
- **Clarity**: Communicates requirements to developers and stakeholders.
- **Alignment**: Ensures the project meets user needs and goals.
- **Reference**: Guides development, testing, and maintenance.

### SRS Structure
Based on standards like IEEE 830-1998, a typical SRS includes:

1. **Introduction**
   - **Purpose**: Why the site is being built.
   - **Scope**: What the site includes and excludes.
   - **Definitions**: Key terms and acronyms.
   - **References**: External documents or standards.
   - **Overview**: Summary of the document.

2. **Overall Description**
   - **Product Perspective**: Context of the site (e.g., standalone or linked to social platforms).
   - **Product Functions**: High-level features (e.g., project showcase, contact form).
   - **User Characteristics**: Description of target users.
   - **Constraints**: Limitations like budget or technology.
   - **Assumptions**: Conditions assumed true (e.g., users have modern browsers).

3. **Specific Requirements**
   - **Functional Requirements**: What the site must do.
   - **Non-Functional Requirements**: Performance, security, accessibility.
   - **Design Constraints**: Specific technologies or standards.

4. **Appendices**
   - Glossary of terms.
   - Analysis models (e.g., wireframes).

### Example SRS for Portfolio Site
Below is a simplified SRS template tailored for the portfolio site.

#### Software Requirements Specification for Portfolio Site
**1. Introduction**

- **1.1 Purpose**: This document outlines the requirements for a portfolio website to showcase the developer’s skills, projects, and experience to potential employers and clients.
- **1.2 Scope**: The site includes sections for About, Skills, Projects, Certifications, and Contact, with features like a theme toggle and responsive design. Exclusions include e-commerce or user accounts.
- **1.3 Definitions**: 
  - **Portfolio Site**: A personal website displaying professional work.
  - **Theme Toggle**: A feature to switch between light and dark modes.
- **1.4 References**: WCAG 2.1, HTML5 standards.
- **1.5 Overview**: This SRS details functional and non-functional requirements for the portfolio site.

**2. Overall Description**

- **2.1 Product Perspective**: A standalone web application hosted on a platform like GitHub Pages, with links to external profiles (e.g., LinkedIn).
- **2.2 Product Functions**:
  - Display professional information and projects.
  - Allow theme switching for accessibility.
  - Provide a contact form for inquiries.
- **2.3 User Characteristics**:
  - Hiring managers: Seek clear skill and project details.
  - Clients: Need contact options and project examples.
  - Peers: Interested in technical skills and code quality.
- **2.4 Constraints**:
  - Built within 4 weeks using free tools.
  - Uses HTML, CSS, JavaScript, and optional frameworks.
- **2.5 Assumptions**:
  - Users have modern browsers (Chrome, Firefox, Safari).
  - Internet connection is stable.

**3. Specific Requirements**

- **3.1 Functional Requirements**:
  - **FR1**: The site shall have a navigation menu linking to all sections.
  - **FR2**: The Projects section shall display 3-5 projects with titles, descriptions, images, and links.
  - **FR3**: The Contact section shall include a form that sends emails to the developer.
  - **FR4**: A theme toggle shall allow switching between light and dark modes.
- **3.2 Non-Functional Requirements**:
  - **Performance**: Site loads within 3 seconds on average.
  - **Security**: Uses HTTPS for secure communication.
  - **Accessibility**: Meets WCAG 2.1 Level AA standards.
  - **Usability**: Intuitive navigation with clear labels.
- **3.3 Design Constraints**:
  - Built with HTML5, CSS3, and JavaScript.
  - Hosted on a free platform like GitHub Pages.

**4. Appendices**

- **Glossary**:
  - **WCAG**: Web Content Accessibility Guidelines.
  - **HTTPS**: Secure communication protocol.
- **Analysis Models**: Include a wireframe of the homepage layout.

*Visualization Suggestion*: Include a wireframe diagram showing the homepage layout with navigation, hero section, and project previews.

For a detailed guide on SRS creation, see [Perforce’s SRS Guide](https://www.perforce.com/blog/alm/how-write-software-requirements-specification-srs-document).

## 7. Additional Considerations

### Risk Management
Identify potential risks, such as delays or technical issues, and plan mitigations:
- **Risk**: Limited time for development.
- **Mitigation**: Prioritize core sections (e.g., Projects, About) and add features iteratively.

### Resource Estimation
- **Tools**: Free platforms like Visual Studio Code, GitHub Pages.
- **Time**: 4 weeks, with 1 week for planning, 2 weeks for development, 1 week for testing and deployment.
- **Skills**: Basic HTML, CSS, JavaScript knowledge.

### Stakeholder Collaboration
Even for a personal project, seek feedback from peers or mentors to refine requirements and ensure the site meets industry standards.

## 8. Conclusion

Planning and defining requirements for a portfolio site is a critical step in web development. By understanding the SDLC, gathering requirements through user personas, success criteria, and competitor analysis, defining a clear scope, writing user stories, and documenting everything in an SRS, you create a roadmap for success. These practices ensure the site is functional, user-friendly, and aligned with your professional goals.

In the next chapter, we’ll explore the design phase, including creating wireframes, mockups, and prototypes to visualize the portfolio site.

## Key Citations
- [How to Write an SRS Document - Perforce Software](https://www.perforce.com/blog/alm/how-write-software-requirements-specification-srs-document)
- [Software Development Life Cycle (SDLC) - GeeksforGeeks](https://www.geeksforgeeks.org/software-development-life-cycle-sdlc/)
- [Systems Development Life Cycle - Wikipedia](https://en.wikipedia.org/wiki/Systems_development_life_cycle)
- [What Is the Software Development Life Cycle? - Coursera](https://www.coursera.org/articles/software-development-life-cycle)
- [What is SDLC? Software Development Lifecycle Explained - Atlassian](https://www.atlassian.com/agile/software-development/sdlc)
- [Persona and Requirements Gathering - Bungamaku](https://bungamaku.github.io/post/persona-and-requirements-gathering/)
- [Requirements Gathering For Better User Experience - Usability Geek](https://usabilitygeek.com/requirements-gathering-a-step-by-step-approach-for-a-better-user-experience-part-2/)
- [User Personas vs User Requirements - Komodo Digital](https://www.komododigital.co.uk/insights/user-personas-vs-user-requirements/)
- [User Experience in SD Requirements Gathering - Requiment](https://www.requiment.com/the-role-of-user-experience-in-requirements-gathering/)
- [How are personas used in requirements elicitation - Modern Analyst](https://www.modernanalyst.com/Careers/InterviewQuestions/tabid/128/ID/3041/How-are-personas-used-in-requirements-elicitation-on-agile-projects.aspx)
- [Understanding User Needs: Creating the User Persona - Seilevel](https://seilevel.com/requirements/understanding-user-needs-creating-the-user-persona)
- [Project Success Criteria Examples - Indeed](https://www.indeed.com/career-advice/career-development/project-success-criteria-examples)
- [Top 10 Project Success Criteria - Simplilearn](https://www.simplilearn.com/tutorials/project-management-tutorial/project-success-criteria)
- [Project Success Criteria Guide - Smartsheet](https://www.smartsheet.com/content/project-success-criteria)
- [What Is a Competitor Website Analysis? - WebFX](https://www.webfx.com/blog/web-design/competitor-website-analysis/)
- [How Competitive Analysis Affects Website’s Design - Code Conspirators](https://www.codeconspirators.com/competitive-analysis-affects-websites-design/)
- [Performing Web Design Competitive Analysis - Janbask Digital Design](https://www.janbaskdigitaldesign.com/blogs/perform-competitive-analysis-in-web-design/)
- [Competitive Analysis - Yale Usability](https://usability.yale.edu/usability-evaluation/competitive-analysis)
- [9 Tools for Easy Competitive Website Analysis - Single Grain](https://www.singlegrain.com/blog-posts/analytics/competitive-website-analysis-tools/)
- [How to Write a Project Scope in 8 Easy Steps - Asana](https://asana.com/resources/project-scope)
- [How to Define & Write a Project Scope - Atlassian](https://www.atlassian.com/work-management/project-management/project-scope)
- [80+ Free User Story Examples with Acceptance Criteria - Smartsheet](https://www.smartsheet.com/content/user-story-with-acceptance-criteria-examples)
- [Acceptance Criteria for User Stories in Agile - AltexSoft](https://www.altexsoft.com/blog/acceptance-criteria-purposes-formats-and-best-practices/)
- [What is User Story and Acceptance Criteria - Agilemania](https://agilemania.com/what-is-user-story-and-acceptance-criteria)
- [What is User Story and Acceptance Criteria (Examples) - Software Testing Help](https://www.softwaretestinghelp.com/user-story-acceptance-criteria/)
- [Acceptance Criteria for User Stories - IntelliSoft](https://intellisoft.io/user-story-acceptance-criteria-explained-with-examples/)
- [Acceptance Criteria Explained - Atlassian](https://www.atlassian.com/work-management/project-management/acceptance-criteria)
- [User Stories and User Story Examples - Mountain Goat Software](https://www.mountaingoatsoftware.com/agile/user-stories)
- [What is acceptance criteria? Definition and Best Practices - ProductPlan](https://www.productplan.com/glossary/acceptance-criteria/)
- [Software Requirements Specification document with example - Krazytech](https://krazytech.com/projects/sample-software-requirements-specificationsrs-report-airline-database)
- [Write a Software Requirement Document (With Template) - Asana](https://asana.com/resources/software-requirement-document-template)
- [Software Requirement Specification (SRS) Format - GeeksforGeeks](https://www.geeksforgeeks.org/software-requirement-specification-srs-format/)