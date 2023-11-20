import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { addProduct, editProduct, selectProduct } from 'store/actions';
import { Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import store from 'store';

type AddProductFormValues = {
  name: string;
  description: string;
  price: number;
}

type AddProductFormProps = {
  edit?: boolean
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  description: Yup.string().required('Description is required'),
  price: Yup.number().positive('Price must be a positive number').required('Price is required'),
});

const AddProductForm: React.FC<AddProductFormProps> = ({ edit }) => {
  const router = useRouter();
  const { t } = useTranslation('', { keyPrefix: 'form.fields' })

  return (
    <Formik<AddProductFormValues>
      initialValues={edit ? store.selectedProduct as Product :{ name: '', description: '', price: 0 }}
      validationSchema={validationSchema}
      onSubmit={values => {
        if(edit) {
          editProduct(values as Product)
        } else {
          addProduct(values);
        }
        router.back();
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }: FormikProps<AddProductFormValues>) => (
        <View>
          <Input
            placeholder={t('name')}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
          />
          {errors.name && touched.name && <Text>{errors.name}</Text>}

          <Input
            placeholder={t('description')}
            onChangeText={handleChange('description')}
            onBlur={handleBlur('description')}
            value={values.description}
          />
          {errors.description && touched.description && <Text>{errors.description}</Text>}

          <Input
            placeholder={t('price')}
            onChangeText={handleChange('price')}
            onBlur={handleBlur('price')}
            value={values.price.toString()}
            keyboardType="numeric"
          />
          {errors.price && touched.price && <Text>{errors.price}</Text>}

          <Button onPress={(e) => handleSubmit(e as any)} title={t('submit')} />
        </View>
      )}
    </Formik>
  );
};

export default AddProductForm;