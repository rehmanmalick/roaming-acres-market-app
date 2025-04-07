import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Switch } from 'react-native';

interface NotificationSettingComponentProps {
  title: string;
  text?: string;
}

const NotificationSettingComponent = ({ title, text,}: NotificationSettingComponentProps) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View  className="flex-row justify-between bg-white rounded-lg p-3 my-2">

      <View className="flex-1 px-6">
        <Text className="text-xl font-bold mb-1">{title}</Text>
            <Text className="text-md text-gray-600 py-2">{text}</Text>
      </View>
    <View className="justify-center items-center pr-4">
        <Switch
            trackColor={{ false: '#ffffff', true: '#008080' }}
            thumbColor={isEnabled ? '#ffffff' : '#ffffff'}
            ios_backgroundColor="#ffffff"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{ transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }] }}
        />
        {/* </View> */}
    </View>

    </View>
  );
};

export default NotificationSettingComponent;