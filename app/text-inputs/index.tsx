import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedTextInput from '@/presentation/shared/ThemedTextInput';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

const isIOS = Platform.OS === 'ios'

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: ''
  })

  return (
    <KeyboardAvoidingView    //-> Para que el teclado se vea bien tanto en ios como en android
      behavior={isIOS ? 'height' : undefined}
    >
      <ScrollView>
        <ThemedView margin>
          <ThemedTextInput
            placeholder='Nombre Completo'
            autoCapitalize={'words'}
            autoCorrect={true}
            autoComplete='name'
            onChangeText={(text) => setForm({ ...form, name: text })}
          />
          <ThemedTextInput
            placeholder='Correo Electronico'
            autoCorrect={false}
            autoComplete='name'
            keyboardType='email-address'
            onChangeText={(text) => setForm({ ...form, email: text })}
          />
          <ThemedTextInput
            placeholder='Phone'
            autoCorrect={false}
            autoComplete='name'
            keyboardType='phone-pad'
            onChangeText={(text) => setForm({ ...form, phone: text })}
          />


          <ThemedCard>
            <ThemedText>
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>
          <ThemedCard>
            <ThemedText>
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>
          <ThemedCard>
            <ThemedText>
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>
          <ThemedCard>
            <ThemedText>
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>
          <ThemedCard>
            <ThemedText>
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>
          <ThemedCard>
            <ThemedText>
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>
          <ThemedCard>
            <ThemedText>
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>
          <ThemedCard>
            <ThemedText>
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>
          <ThemedCard>
            <ThemedText>
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>
          <ThemedCard
            style={{
              marginBottom: isIOS ? 100 : 10
            }}
          >
            <ThemedTextInput
              placeholder='Nombre Completo'
              autoCapitalize={'words'}
              autoCorrect={true}
              autoComplete='name'
              onChangeText={(text) => setForm({ ...form, name: text })}
            />
          </ThemedCard>

        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
