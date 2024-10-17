# StackedTabs Component Documentation

## Overview

The StackedTabs component is a customizable, animated tab interface that can be oriented vertically or horizontally. It provides an interactive stack of tabs that fan out on hover and separate on click.

## Dependencies

This React component requires the following dependencies:

```javascript
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost, IconDefinition } from '@fortawesome/free-solid-svg-icons';
```

Ensure these dependencies are installed in your project before using the StackedTabs component.

## Installation

1. Create a new file for the StackedTabs component in your project, e.g., `components/StackedTabs.tsx`.
2. Copy the component code into this file.
3. Import the component where you want to use it:

```javascript
import StackedTabs from "@/app/components/stacked-tabs";
```

## Usage

The StackedTabs component can be used with either vertical or horizontal orientation:

```jsx
<StackedTabs orientation="vertical" />
```

or

```jsx
<StackedTabs orientation="horizontal" />
```

## Props

| Prop         | Type                        | Description                                   |
|--------------|---------------------------|-----------------------------------------------|
| orientation  | 'vertical' \| 'horizontal' | Determines the direction of tab expansion     |

## Customization

### Modifying Tabs

You can add, remove, or modify tabs by adjusting the `initialTabs` array in the component:

```javascript
const initialTabs: Tab[] = [
    { icon: faGhost, label: 'To Do', href: '' },
    { icon: faGhost, label: 'fix UI', href: '' },
    { icon: faGhost, label: 'please', href: '' },
    { icon: faGhost, label: 'Now', href: '' },
    { icon: faGhost, label: ':)', href: '' },
];
```

Each tab object in the array has the following properties:

- `icon`: The FontAwesome icon to display (type: IconDefinition)
- `label`: The text to display on the tab
- `href`: A link for the tab (currently unused in the component)

### Adjusting Animations

To modify the layout, hover effects, and final unstacked positions, adjust the `cardVariants` object in the component:

```javascript
const cardVariants = {
    initial: (index: number) => ({
        x: index * 4,
        y: index * 4,
        rotate: index * 4,
        scale: 1 - index * 0.1,
        transition: { duration: 0.3 }
    }),
    hover: (index: number) => ({
        x: index * 8,
        y: index * 16,
        rotate: index * 2,
        scale: 1 - index * 0.03,
        transition: { duration: 0.4 }
    }),
    verticalSeparated: (index: number) => ({
        x: 0,
        y: index * 70,
        rotate: 0,
        scale: 1,
        transition: { duration: 0.8, delay: index * 0.1 }
    }),
    horizontalSeparated: (index: number) => ({
        x: index * 260,
        y: 0,
        rotate: 0,
        scale: 1,
        transition: { duration: 0.8, delay: index * 0.1 }
    }),
};
```

Adjust the values in each variant to change the position, rotation, scale, and transition of the tabs in different states.

## Behavior

- Initially, tabs are stacked with a slight offset.
- On hover, tabs spread out slightly.
- Clicking the first tab separates all tabs either vertically or horizontally (based on the `orientation` prop).
- When tabs are separated, the label of the first tab changes to "Close".
- Clicking the first tab again closes all tabs and reverts its label.
- Only the first tab responds to clicks for opening/closing the stack.

## Styling

The component uses Tailwind CSS for styling. You can modify the appearance by changing the className properties in the component's JSX.

## Notes

- Ensure that you have Framer Motion and FontAwesome properly set up in your project for the animations and icons to work correctly.
- The component is designed to be flexible, so feel free to modify it to fit your specific use case or design requirements.
