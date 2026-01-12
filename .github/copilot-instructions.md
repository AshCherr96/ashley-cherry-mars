# AI Copilot Instructions for ashley-cherry-mars

## Project Overview
This is a personal portfolio website for Ashley Cherry, a aspiring software developer. The project is a static HTML site with minimal dependencies, showcasing professional experience and skills.

**Key Files:**
- `index.html` - Main portfolio page (single-page HTML document)
- `README.md` - Project documentation

## Architecture & Structure
- **Type**: Static HTML portfolio (no build tools, no JavaScript frameworks)
- **Current State**: Barebones portfolio with basic HTML structure (heading, about section)
- **Development Pattern**: Direct HTML editing; no compilation or bundling

## Key Patterns & Conventions

### HTML Structure
- Use semantic HTML5 elements (`<head>`, `<body>`, `<h1>`, etc.)
- Include essential meta tags in `<head>`:
  - `charset="UTF-8"`
  - `viewport` for responsive design
  - `description` for SEO
- Keep content sections logically organized (About, Experience, Skills, etc.)

### Content Expansion
When adding new sections to the portfolio:
- Add descriptive `<h2>` headings for major sections
- Use `<p>` tags for paragraphs and `<ul>`/`<li>` for lists
- Maintain consistent indentation (4 spaces) for readability

## Workflow Notes
- **No Build Step**: Changes to `index.html` are immediately visible; refresh browser to view updates
- **No Testing Framework**: This is a static site; focus on HTML validity and visual consistency
- **Git-Based**: Repository is hosted on GitHub (AshCherr96/ashley-cherry-mars)

## Future Enhancement Areas
When expanding the portfolio, consider:
- Adding CSS styling in a `<style>` tag or separate stylesheet
- Creating project showcase sections with descriptions and links
- Adding contact information or social media links
- Implementing responsive design CSS if not present

## Quick Tips for Agents
- Always maintain valid HTML5 structure; test that content renders
- Keep the portfolio content focused and professional
- Preserve existing meta tags and viewport settings
- When unsure about styling, ask clarifying questions about design intent
