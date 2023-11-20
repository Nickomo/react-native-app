import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { addProductsList, editProductsList } from 'store/actions';
import { Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import store from 'store';

type AddProductsListFormValues = {
  name: string;
  description: string;
}

type AddProductsListFormProps = {
  edit?: boolean
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  description: Yup.string().required('Description is required'),
});

const AddProductForm: React.FC<AddProductsListFormProps> = ({edit}) => {
  const router = useRouter();
  const { t } = useTranslation('', { keyPrefix: 'form.fields' })

  return (
    <Formik<AddProductsListFormValues>
      initialValues={edit ? store.selectedProductsList as ProductsList : { name: '', description: ''}}
      validationSchema={validationSchema}
      onSubmit={values => {
        if(edit) {
          editProductsList(values as ProductsList)
        } else {
          addProductsList(values);
        }
        router.back();
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }: FormikProps<AddProductsListFormValues>) => (
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

          <Button onPress={(e) => handleSubmit(e as any)} title={t('submit')} />
        </View>
      )}
    </Formik>
  );
};

export default AddProductForm;