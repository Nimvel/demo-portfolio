import TestRenderer from 'react-test-renderer';
import Paginator from './Paginator';

describe('Paginator', () => {
    test('10 must be added to the current page', () => {
        const testRenderer = TestRenderer.create(<Paginator currentPage={10} />);
        testRenderer.nextTenPages();
        expect(testRenderer.props.currentPage).toBe(20);
    });

    test('10 must be subtracted from the current page', () => {
        const testRenderer = TestRenderer.create(<Paginator currentPage={20} />);
        testRenderer.props.previousTenPages();
        expect(testRenderer.props.currentPage).toBe(10);
    });
})