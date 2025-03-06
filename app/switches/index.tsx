import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedSwitch from '@/presentation/shared/ThemedSwitch';
import ThemedView from '@/presentation/shared/ThemedView';
import React, { useState } from 'react';
import { Switch } from 'react-native';

const Switches = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });




  return (
    <ThemedView margin className='mt-2' >
      <ThemedCard>
        <ThemedSwitch
          text='Hambriento'
          value={state.isHungry}
          onValueChange={(value) => setState({ ...state, isActive: value })}
          className='mb-4'
        />
        <ThemedSwitch
          text='Contento'
          value={state.isHappy}
          onValueChange={(value) => setState({ ...state, isActive: value })}
          className='mb-4'
        />
      </ThemedCard>
    </ThemedView>
  );
};




export default Switches;
