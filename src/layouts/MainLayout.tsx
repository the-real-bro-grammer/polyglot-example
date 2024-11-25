import AirbnbHeader from '@/components/scaffolding/AirbnbHeader';
import Footer from '@/components/scaffolding/Footer';
import { ReactLayout } from '@/types/react/layout';
import IReactLayoutProps from '@/types/react/layout_props';
import { connect } from 'react-redux';
import { RootState } from '../types/redux/root_state';

interface MainLayoutProps extends IReactLayoutProps {}

const MainLayout: ReactLayout<MainLayoutProps> = (props: MainLayoutProps) => {
    return (
        <>
            <AirbnbHeader />
            <main id='siteContent' className='px-4'>
                {props.children}
            </main>
            <Footer />
        </>
    );
};

const mapStateToProps = (state: RootState) => {
    return {};
};

export default connect(mapStateToProps)(MainLayout);
