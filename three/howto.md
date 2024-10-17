Create a new file  for the StackedTabs component, then import it into your project. 

The component takes an orientation prop that can be either vertical or horizontal.

*/ import */

import StackedTabs from "@/app/components/stacked-tabs";

*/ useage */

<>
	<StackedTabs orientation="vertical" />
</>

or 

<>
	<StackedTabs orientation="horizontal" />
</>


---

You can Add oe reduce the numebr of tabs as well as their attributes using the initialTabs array. 

  const initialTabs: Tab[] = [
        { icon: faGhost, label: 'To Do', href: '' },
        { icon: faGhost, label: 'fix UI', href: '' },
        { icon: faGhost, label: 'please', href: '' },
        { icon: faGhost, label: 'Now', href: '' },
        { icon: faGhost, label: ':)', href: '' },
    ];


To adjust the layout, hover settings and final unstacked settings look at the cardVariants object.

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
            y: index *16,
            rotate: index * 2,
            scale: 1 - index * 0.03,
            transition: { duration: 0.4 }
        }),
	//.....
