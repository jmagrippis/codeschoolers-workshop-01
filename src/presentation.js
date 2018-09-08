import React, { PureComponent } from 'react';
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Quote,
  Slide,
  Text,
  Appear,
  Layout,
  CodePane,
  List,
  ListItem,
  Link
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import 'normalize.css';

import htmlSnippet1 from './snippets/html1.js';
import htmlSnippet2 from './snippets/html2.js';

import cssSnippet from './snippets/css.js';

import jsSnippet1 from './snippets/js1.js';
import jsSnippet2 from './snippets/js2.js';
import jsSnippet3 from './snippets/js3.js';
import jsSnippet4 from './snippets/js4.js';
import jsSnippet5 from './snippets/js5.js';
import jsSnippet6 from './snippets/js6.js';

const theme = createTheme(
  {
    primary: '#17A398',
    secondary: '#4C4C9D',
    tertiary: '#F38D68',
    quartenary: 'white'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends PureComponent {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Codeschoolers
          </Heading>
          <Text textColor="tertiary" size={1} fit bold>
            workshop 01: html - styles - javascript
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Modern Websites are made with...
          </Heading>
          <Layout>
            <Text textColor="secondary">HTML</Text>
            <Text textColor="secondary">Styles</Text>
            <Text textColor="secondary">Javascript</Text>
          </Layout>
          <Layout>
            <Appear>
              <Text textColor="secondary" bold>
                Content
              </Text>
            </Appear>
            <Appear>
              <Text textColor="secondary" bold>
                Looks
              </Text>
            </Appear>
            <Appear>
              <Text textColor="secondary" bold>
                Interactivity
              </Text>
            </Appear>
          </Layout>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            HTML
          </Heading>
          <Text textSize="1em" textColor="quartenary">
            Nest your <strong>content</strong> in a way the browser can
            understand
          </Text>
          <CodePane textSize="1.3em" lang="html" source={htmlSnippet1} />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            HTML
          </Heading>
          <Text textSize="1em" textColor="quartenary">
            Nest your <strong>content</strong> in a way the browser can
            understand
          </Text>
          <CodePane textSize="0.8em" lang="markup" source={htmlSnippet2} />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Style
          </Heading>
          <Text textSize="1em" textColor="quartenary">
            Tell the browser how your content should <strong>look</strong>
          </Text>
          <CodePane textSize="0.6em" lang="css" source={cssSnippet} />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Javascript
          </Heading>
          <Text textSize="1em" textColor="quartenary">
            <strong>Modify</strong> your content without reloading the page
          </Text>
          <CodePane textSize="0.6em" lang="javascript" source={jsSnippet1} />
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Order of operations
          </Heading>
          <List ordered>
            <ListItem>
              Read and render the <strong>HTML</strong>
            </ListItem>
            <ListItem>
              Parse and render <strong>style</strong> rules
            </ListItem>
            <ListItem>
              Execute <strong>javascript</strong>
            </ListItem>
          </List>
          <div>
            <Appear>
              <Text textColor="quartenary">
                The browser will not load more HTML, or styles / css, until you
                navigate to a different page...
              </Text>
            </Appear>
            <Appear>
              <Text textColor="quartenary">
                But it will keep executing javascript!
              </Text>
            </Appear>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Javascript
          </Heading>
          <Text textSize="1em" textColor="quartenary">
            <strong>React</strong> to user behaviour
          </Text>
          <CodePane textSize="0.6em" lang="javascript" source={jsSnippet2} />
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Tool interlude
          </Heading>
          <List>
            <ListItem margin="1em">
              <Link href="https://github.com/" bold>
                Github
              </Link>
              : Collaborate and make / save / revert your changes with version
              control
            </ListItem>
            <ListItem margin="1em">
              <Link href="https://codesandbox.io/" bold>
                Code Sandbox
              </Link>
              : Sublime Text for your browser, preconfigured with quality of
              life features such as live preview, reload and code formatting on
              save
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Javascript
          </Heading>
          <Text textSize="1em" textColor="quartenary">
            You may get <strong>elements</strong> in the html / document.
          </Text>
          <CodePane textSize="0.6em" lang="javascript" source={jsSnippet3} />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Javascript
          </Heading>
          <Text textSize="1em" textColor="quartenary">
            You may <strong>listen</strong> for keystrokes.
          </Text>
          <CodePane textSize="0.6em" lang="javascript" source={jsSnippet4} />
          <div>
            <Appear>
              <div>
                <Text textSize="1em" margin="1em" textColor="quartenary">
                  Events are objects that have different{' '}
                  <strong>properties</strong> according to their type.
                </Text>
                <Text textSize="1em" margin="1em" textColor="quartenary">
                  Key events always have a "key" property!
                </Text>
              </div>
            </Appear>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Javascript
          </Heading>
          <Text textSize="1em" textColor="quartenary">
            Handle specific keystrokes with an <strong>conditional</strong>
          </Text>
          <CodePane textSize="0.6em" lang="javascript" source={jsSnippet5} />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Javascript
          </Heading>
          <Text textSize="1em" textColor="quartenary">
            Do more complex operations with helper <strong>methods</strong>
          </Text>
          <CodePane textSize="0.6em" lang="javascript" source={jsSnippet2} />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Javascript
          </Heading>
          <Text textSize="1em" textColor="quartenary">
            <strong>Refactor</strong> your code so it will still make sense
            tomorrow
          </Text>
          <CodePane textSize="0.45em" lang="javascript" source={jsSnippet6} />
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <BlockQuote>
            <Quote>Anything is possible, given infinite time</Quote>
            <div>
              <Appear>
                <Cite textColor="secondary">Johnny</Cite>
              </Appear>
            </div>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
