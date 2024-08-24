import { renderHook } from '@testing-library/react';
import useScrollToTop from './use-sroll-to-top';

describe('Hook: useScrollToTop', () => {
  let originalQuerySelector: typeof document.querySelector;

  beforeAll(() => {
    originalQuerySelector = document.querySelector;
  });

  afterAll(() => {
    document.querySelector = originalQuerySelector;
  });

  it('should call scrollIntoView on header element when component mounts', () => {
    const mockHeaderElement = {
      scrollIntoView: vi.fn(),
    };

    Object.defineProperty(document, 'querySelector', {
      value: function(selector: string) {
        if (selector === 'header') {
          return mockHeaderElement;
        }
        return null;
      },
      writable: true,
    });

    const { unmount } = renderHook(() => useScrollToTop());

    expect(mockHeaderElement.scrollIntoView).toHaveBeenCalled();

    unmount();
  });
});
