# Contributing to Digent View

Thanks for your interest in contributing to Digent View! This document outlines how to participate in the project.

## Development Setup

```bash
# Clone the repository
git clone https://github.com/yanghuaqlx/digent-view.git
cd digent-view

# Install dependencies
npm install

# Build in watch mode (outputs to ./dist/)
npm run dev

# Build for production
npm run build

# Run tests
npm run test

# Run linting
npm run lint
```

## Project Structure

```
src/
├── main.ts              # Plugin entry point
├── view/                # View and controller
├── render/              # WebGL rendering
├── layout/              # Force layout engine (Web Worker)
├── data/                # Graph data structures
├── overlay/             # UI control panel
├── export/              # Export features (Noda CSV, etc.)
├── i18n/                # Internationalization
├── settings/            # Plugin settings
├── interactions/        # Camera and user interactions
├── tour/                # Tour and auto-fly features
├── quality/             # Quality tier definitions
├── timing/              # Frame clock and loop
├── bench/               # Benchmark utilities
├── types.ts             # Type definitions
├── constants.ts         # Constants
└── settings.ts          # Settings types and defaults
```

## How to Contribute

### Reporting Bugs

- Open an issue with a clear description of the bug
- Include steps to reproduce
- Mention your Obsidian version and platform

### Suggesting Features

- Open an issue with the "feature request" label
- Describe the use case and why it would be valuable

### Pull Requests

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Ensure tests pass (`npm run test`)
5. Submit a pull request

## Code Style

- TypeScript with strict mode
- Follow existing code conventions
- Keep the minimal aesthetic — Digent View is intentionally streamlined

## License

By contributing to Digent View, you agree that your contributions will be licensed under the MIT License.
