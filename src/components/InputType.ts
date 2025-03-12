import {ref} from "vue";
import type {Ref} from "vue";

export enum InputType {
    Name = 'name',
    Organization = 'organization',
    Email = 'email',
    Phone = 'phone',
    TextArea = 'textarea'
}

export interface Config {
    label: string,
    type: string,
    autocomplete: string
    validate?: (input: string) => boolean,
    error?: string
}

export function validateMail(input: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
}

export function validatePhone(input: string) {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(input);
}

export const inputConfig: Ref<Record<InputType, Config>> = ref({
    [InputType.Name]: {
        label: 'Name',
        type: 'text',
        autocomplete: 'given-name'
    },
    [InputType.Organization]: {
        label: 'Organization',
        type: 'text',
        autocomplete: 'organization'
    },
    [InputType.Email]: {
        label: 'Email',
        type: 'email',
        autocomplete: 'email',
        validate: validateMail,
        error: 'Invalid Email'
    },
    [InputType.Phone]: {
        label: 'Phone',
        type: 'tel',
        autocomplete: 'tel',
        validate: validatePhone,
        error: 'Invalid Phone'
    },
    [InputType.TextArea]: {
        label: 'Message',
        type: 'textarea',
        autocomplete: 'off'
    }
})