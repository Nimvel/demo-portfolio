import TestRenderer from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('ProfileStatus Component', () => {
    test('status from props must be in the state', () => {
        const testRenderer = TestRenderer.create(<ProfileStatus status='status' />);
        const testInstance = testRenderer.root;

        expect(testInstance.findByType(ProfileStatus).props.status).toBe('status');

        // expect(testInstance.props.status).toBe('status');
        // expect(testInstance.state.status).toBe('status');
        // expect(testInstance.props({status: 'status'}));
        // expect(testInstance.testInstance.findByProps(props.status));
    });

    test('after creation <span> must be displayed', () => {
        const testRenderer = TestRenderer.create(<ProfileStatus status='status' />);
        const testInstance = testRenderer.root;
        expect(testInstance.findByType(span)).not.toBeNull();
    });

    test(`after creation <input> must not be displayed`, () => {
        const testRenderer = TestRenderer.create(<ProfileStatus status='status' />);
        const testInstance = testRenderer.root;
        expect(testInstance.findByType(input)).toThrow();
    });

    test('after creation <span> must contains correct status', () => {
        const testRenderer = TestRenderer.create(<ProfileStatus status='status' />);
        const testInstance = testRenderer.root;
        expect(testInstance.findByType(span).children[0]).toBe('status');
    });

    test('input must be displayed in editMode instead of span', () => {
        const testRenderer = TestRenderer.create(<ProfileStatus status='status' />);
        const testInstance = testRenderer.root;
        expect(testInstance.findByType(input).props.value).toBe('status');
    });
});