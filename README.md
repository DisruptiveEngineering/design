# Veira Design System

A React component library extending Designsystemet.no with custom Veira brand tokens.

## Dependencies

Your project needs these peer dependencies:

```bash
npm install @digdir/designsystemet-react @digdir/designsystemet-css react react-dom
```

## Installation

Install directly from GitHub:

```bash
npm install github:DisruptiveEngineering/design#main
```

Or add to your `package.json`:

```json
{
  "dependencies": {
    "@veira/design": "github:DisruptiveEngineering/design#main"
  }
}
```

## Usage

### SCSS Setup

Import both Designsystemet base styles and Veira tokens:

```css
/* Base component styles */
@use '@digdir/designsystemet-css';

/* Veira custom design tokens */
@use '@veira/design/tokens';
```

### Import Components

```tsx
import { Button, Card, Typography } from '@veira/design';

function App() {
  return (
    <Card>
      <Typography variant="heading">Welcome</Typography>
      <Button>Get Started</Button>
    </Card>
  );
}
```

### Use Design Tokens

```tsx
import { tokens } from '@veira/design';

const styles = {
  backgroundColor: tokens.colors.veiraYellow100.base,
  padding: tokens.spacing.md,
};
```

### Veira Color Components

Use Veira colors with the `data-color` attribute:

```tsx
<Button data-color="veira-teal">Teal Button</Button>
<Card data-color="veira-yellow-100">Yellow Card</Card>
<Chip data-color="neutral">Neutral Chip</Chip>
```

## Available Veira Colors

### Base Colors
- `veira-teal` - Veira teal brand color
- `neutral` - Neutral color
### Brand colors and variants
All base colors (yellow, coral, blue and green)  include `-100`, `-50`, `-25`, and `-10` intensity variants:
- `veira-yellow-100`, `veira-yellow-50`, `veira-yellow-25`, `veira-yellow-10`
- `veira-coral-100`, `veira-coral-50`, `veira-coral-25`, `veira-coral-10`
- `veira-blue-100`, `veira-blue-50`, `veira-blue-25`, `veira-blue-10`
- `veira-green-100`, `veira-green-50`, `veira-green-25`, `veira-green-10`

## Designsystemet Documentation

This design system extends Designsystemet.no:

- **Documentation**: [github.com/digdir/designsystemet](https://github.com/digdir/designsystemet)
- **Component Library**: [storybook.designsystemet.no](https://storybook.designsystemet.no/)

Use the Storybook to explore all available components and their props before using them in your project.
