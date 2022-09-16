import TestRenderer from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('ProfileStatus Component', () => {
    test('status from props must be in the state', () => {
        const testRenderer = TestRenderer.create(<ProfileStatus status='status' />);
        const testInstance = testRenderer.root;

        expect(testInstance.findByType(ProfileStatus).props.status).toBe('status');
    });
});