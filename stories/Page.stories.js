import { Page } from './Page';
import * as HeaderStories from './../components/header/core/index.stories.js';

export default {
  title: 'Example/Page',
  render: (args) => Page(args),
};

export const LoggedIn = {
  args: {
    // More on composing args: https://storybook.js.org/docs/writing-stories/args#args-composition
    ...HeaderStories.LoggedIn.args,
  },
};

export const LoggedOut = {
  args: {
    ...HeaderStories.LoggedOut.args,
  },
};
