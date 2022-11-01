import React from 'react';
import { DefaultLayout } from '../../Lyouts/DefaultLayout';

export const NoMatch = () => {
    return (
        <DefaultLayout contentTitle=''>
            <div className='tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center'>Page not found</div>
        </DefaultLayout>
    );
};
