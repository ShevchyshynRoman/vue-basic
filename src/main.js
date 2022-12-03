import { createApp } from 'vue';
import App from './App';
import BaseCard from '@/components/UI/BaseCard';
import BaseButton from '@/components/UI/BaseButton';
import BaseModal from '@/components/UI/BaseDialog';

const app = createApp(App);

app.component('BaseCard', BaseCard)
app.component('BaseButton', BaseButton)
app.component('BaseModal', BaseModal)

app.mount('#app');
