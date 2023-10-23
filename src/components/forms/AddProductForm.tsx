import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { addProduct } from 'store/actions';
import { Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'expo-router';

type AddProductFormValues = {
  name: string;
  description: string;
  price: number;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  description: Yup.string().required('Description is required'),
  price: Yup.number().positive('Price must be a positive number').required('Price is required'),
});

const AddProductForm: React.FC = () => {
  // const [name, setName] = useState('');
  // const [description, setDescription] = useState('');
  // const [price, setPrice] = useState(0);

  const router = useRouter();

  return (
    <Formik<AddProductFormValues>
      initialValues={{ name: '', description: '', price: 0 }}
      validationSchema={validationSchema}
      onSubmit={values => {
        addProduct(values);
        router.back();
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }: FormikProps<AddProductFormValues>) => (
        <View>
          <Input
            placeholder="Name"
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
          />
          {errors.name && touched.name && <Text>{errors.name}</Text>}

          <Input
            placeholder="Description"
            onChangeText={handleChange('description')}
            onBlur={handleBlur('description')}
            value={values.description}
          />
          {errors.description && touched.description && <Text>{errors.description}</Text>}

          <Input
            placeholder="Price"
            onChangeText={handleChange('price')}
            onBlur={handleBlur('price')}
            value={values.price.toString()}
            keyboardType="numeric"
          />
          {errors.price && touched.price && <Text>{errors.price}</Text>}

          <Button onPress={(e) => handleSubmit(e as any)} title="Submit" />
        </View>
      )}
    </Formik>
  );
};

export default AddProductForm;