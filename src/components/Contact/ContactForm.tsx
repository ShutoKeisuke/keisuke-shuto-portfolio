import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from '../../hooks/useForm';
import { ContactInput } from './ContactInput';
import { ContactTextArea } from './ContactTextArea';
import { SendHorizonal } from 'lucide-react';
import { Toast } from '../Toast';

export const ContactForm = () => {
  const [showToast, setShowToast] = useState(false);

  const {
    values,
    errors,
    validFields,
    handleChange,
    handleSubmit,
    isSubmitting,
    isDisabled
  } = useForm({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    onSuccess: () => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  });

  return (
    <>
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ContactInput
          label="Name"
          name="name"
          value={values.name}
          error={errors.name}
          isValid={validFields.name}
          onChange={handleChange}
          required
        />

        <ContactInput
          label="Email"
          name="email"
          type="email"
          value={values.email}
          error={errors.email}
          isValid={validFields.email}
          onChange={handleChange}
          required
        />

        <ContactTextArea
          label="Message"
          name="message"
          value={values.message}
          error={errors.message}
          isValid={validFields.message}
          onChange={handleChange}
          required
        />

        <motion.button
          type="submit"
          disabled={isDisabled}
          className={`
            group relative w-full py-4 rounded-lg font-medium
            flex items-center justify-center gap-2
            overflow-hidden
            ${isDisabled
              ? 'bg-[#121629] text-[#b8c1ec]/50 cursor-not-allowed'
              : 'bg-[#121629] text-[#fffffe]'
            }
            focus:outline-none focus:ring-2 focus:ring-[#97c1a9] focus:ring-offset-2 focus:ring-offset-[#232946]
            transition-all duration-300 ease-out
          `}
        >
          <div className={`
            absolute inset-0 rounded-lg border
            ${isDisabled
              ? 'border-[#b8c1ec]/10'
              : 'border-[#97c1a9]/30'
            }
          `} />

          {!isDisabled && (
            <>
              <div className="absolute inset-y-0 left-0 w-1 bg-[#97c1a9] rounded-l-lg opacity-75" />
              <div className="absolute inset-y-0 right-0 w-1 bg-[#97c1a9] rounded-r-lg opacity-75" />
              <div className="absolute inset-0 bg-[#97c1a9]/10" />
            </>
          )}

          <span className="relative">
            {isSubmitting ? '送信中...' : 'メッセージを送信'}
          </span>
          <SendHorizonal className={`
            w-5 h-5 relative
            ${!isDisabled && 'text-[#97c1a9]'}
          `} />
        </motion.button>
      </motion.form>

      <Toast
        message="メッセージの送信が完了しました。内容を確認次第、ご連絡させていただきます。"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
};