// import React from 'react';
// import renderer from 'react-test-renderer';
// import { AddChatButton } from '../AddChatButton';
// import { Pressable } from 'react-native';

// describe('AddChatButton', () => {
//   it('matches snapshot', () => {
//     const handlePress = jest.fn();
//     const tree = renderer.create(<AddChatButton onPress={handlePress} isDialogOpened={false} />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });

//   it('calls onPress when pressed', () => {
//     const handlePress = jest.fn();
//     const component = renderer.create(<AddChatButton onPress={handlePress} isDialogOpened={false} />);
//     const instance = component.root;

//     renderer.act(() => {
//       instance.findByType(Pressable).props.onPress();
//     });

//     expect(handlePress).toHaveBeenCalled();
//   });
// });

import React from 'react';
import renderer from 'react-test-renderer';
import { AddChatButton } from '../AddChatButton';
import { Pressable, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

describe('AddChatButton', () => {
  it('matches snapshot when dialog is closed', () => {
    const handlePress = jest.fn();
    const tree = renderer.create(<AddChatButton onPress={handlePress} isDialogOpened={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot when dialog is opened', () => {
    const handlePress = jest.fn();
    const tree = renderer.create(<AddChatButton onPress={handlePress} isDialogOpened={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls onPress when pressed', () => {
    const handlePress = jest.fn();
    const component = renderer.create(<AddChatButton onPress={handlePress} isDialogOpened={false} />);
    const instance = component.root;

    renderer.act(() => {
      instance.findByType(Pressable).props.onPress();
    });

    expect(handlePress).toHaveBeenCalled();
  });

});
