import { render } from '@testing-library/react';

import WaCard from './wa-card';

describe('WaCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WaCard />);
    expect(baseElement).toBeTruthy();
  });
});
