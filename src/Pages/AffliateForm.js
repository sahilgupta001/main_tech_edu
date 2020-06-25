import React from 'react'
import Heading from '../Components/Heading'
import * as Yup from 'yup'
import {Formik,
    Form,
    Field,
    ErrorMessage,
    FieldArray,
    FastField} from 'formik'
import FormErrorMessage from '../Components/FormErrorMessage'

export default function AffliateForm() {


    const initialValues={
        name:'',
        email:'',
        contact_no:'',
        college_name:'',
        question_1:'',
        question_2:'',
        question_3:'',
        question_4:'',
        see_yourself:'',
        engagement:''
    }


    const onSubmit=(values)=>{
        console.log(values)
    }


    const validationSchema =Yup.object({
        name:Yup.string().required("Required"),
        email:Yup.string().email("Invalid Format").required("Required"),
        contact_no:Yup.string().required("Required"),
        college_name:Yup.string().required("Required"),
        question_1:Yup.string().required("Required"),
        question_2:Yup.string().required("Required"),
        question_3:Yup.string().required("Required"),
        question_4:Yup.string().required("Required"),
        see_yourself:Yup.string().required("Required"),
        engagement:Yup.string().required("Required"),


    })

    return (
        <div className="p-t-100">
            <div className="container">
                <Heading title="Edunomics Business Affiliate" />
            </div>
            <div className="container ">
                <Formik
                onSubmit={onSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
                >
                    {
                        formik=>{
                            return(
                                <Form>
                                {/* Full name */}
                                <div className="row">
                                <Field name="name">
                                    {fieldProps=>{
                                        console.log(fieldProps)
                                        const {field,meta} = fieldProps
                                        return(
                                            <div class="input-field ">
                                            <input id="name" type="text"  {...field} />
                                            <label htmlFor="name">Full Name</label>
                                            </div>
                                        )
                                    }}
                                </Field>  
                                <ErrorMessage name="name" component={FormErrorMessage} />
                                </div>

                                    {/* email */}

                                <div className="row">
                                <Field name="email">
                                    {fieldProps=>{
                                        const {field,meta} = fieldProps
                                        return(
                                            <div class="input-field ">
                                            <input id="email" type="text"  {...field} />
                                            <label htmlFor="email">Email Address</label>
                                            </div>
                                        )
                                    }}
                                </Field>  
                                <ErrorMessage name="email" component={FormErrorMessage} />
                                </div>
                                <div className="row">
                                <Field name="contact_no">
                                    {fieldProps=>{
                                        const {field,meta} = fieldProps
                                        return(
                                            <div class="input-field ">
                                            <input id="contact_no" type="text"  {...field} />
                                            <label htmlFor="contact_no">Full Name</label>
                                            </div>
                                        )
                                    }}
                                </Field>  
                                <ErrorMessage name="contact_no" component={FormErrorMessage} />
                                </div>
                                <div className="row">
                                <Field name="college_name">
                                    {fieldProps=>{
                                        const {field,meta} = fieldProps
                                        return(
                                            <div class="input-field ">
                                            <input id="college_name" type="text"  {...field} />
                                            <label htmlFor="college_name">Full Name</label>
                                            </div>
                                        )
                                    }}
                                </Field>  
                                <ErrorMessage name="name" component={FormErrorMessage} />
                                </div>
                                <div className="row">
                                <Field name="name">
                                    {fieldProps=>{
                                        console.log(fieldProps)
                                        const {field,meta} = fieldProps
                                        return(
                                            <div class="input-field ">
                                            <input id="name" type="text"  {...field} />
                                            <label htmlFor="name">Full Name</label>
                                            </div>
                                        )
                                    }}
                                </Field>  
                                <ErrorMessage name="name" component={FormErrorMessage} />
                                </div>
                                <div className="row">
                                <Field name="name">
                                    {fieldProps=>{
                                        console.log(fieldProps)
                                        const {field,meta} = fieldProps
                                        return(
                                            <div class="input-field ">
                                            <input id="name" type="text"  {...field} />
                                            <label htmlFor="name">Full Name</label>
                                            </div>
                                        )
                                    }}
                                </Field>  
                                <ErrorMessage name="name" component={FormErrorMessage} />
                                </div>
                                </Form>
                            )
                        }
                    }
                </Formik>
            </div>
            
        </div>
    )
}
