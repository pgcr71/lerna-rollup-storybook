import type { Meta } from '@storybook/react';

import { Footer } from './Footer';


const meta: Meta<typeof Footer> = {
    component: Footer,
};

export const Text = () => (
    <Footer></Footer>
   );
   
export default meta;
