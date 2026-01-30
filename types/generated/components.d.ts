import type { Schema, Struct } from '@strapi/strapi';

export interface ContentBanner extends Struct.ComponentSchema {
  collectionName: 'components_content_banners';
  info: {
    description: '';
    displayName: 'Banner';
    icon: 'grid';
  };
  attributes: {
    Heading: Schema.Attribute.Text;
    LoginButton: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Login'>;
    LoginButtonLink: Schema.Attribute.Text;
    Media: Schema.Attribute.Media<'images' | 'videos'>;
    Name: Schema.Attribute.String;
    NumberOfPeople: Schema.Attribute.Integer;
    RegisterButton: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Register'>;
    RegisterButtonLink: Schema.Attribute.Text;
    ShowFireworks: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    ShowPeople: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    SignUpButton: Schema.Attribute.String;
    SignUpButtonLink: Schema.Attribute.Text;
    SubHeading: Schema.Attribute.Text;
  };
}

export interface ContentCard extends Struct.ComponentSchema {
  collectionName: 'components_content_cards';
  info: {
    displayName: 'Card';
    icon: 'server';
  };
  attributes: {
    ButtonLink: Schema.Attribute.String;
    ButtonText: Schema.Attribute.String;
    Content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    EventDate: Schema.Attribute.Date;
    EventTime: Schema.Attribute.String;
    Excerpt: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    Media: Schema.Attribute.Media<'images' | 'videos'>;
    Name: Schema.Attribute.String;
  };
}

export interface ContentCardBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_card_blocks';
  info: {
    displayName: 'CardBlock';
    icon: 'stack';
  };
  attributes: {
    Card: Schema.Attribute.Component<'content.card', true>;
  };
}

export interface ContentHubSpot extends Struct.ComponentSchema {
  collectionName: 'components_content_hub_spots';
  info: {
    displayName: 'HubSpot';
    icon: 'bulletList';
  };
  attributes: {
    FormId: Schema.Attribute.String;
    PortalId: Schema.Attribute.String;
    Region: Schema.Attribute.String;
    SubmitText: Schema.Attribute.Text;
  };
}

export interface ContentPeople extends Struct.ComponentSchema {
  collectionName: 'components_content_people';
  info: {
    description: '';
    displayName: 'People';
    icon: 'user';
  };
  attributes: {
    Person: Schema.Attribute.Component<'content.person', true>;
  };
}

export interface ContentPerson extends Struct.ComponentSchema {
  collectionName: 'components_content_person';
  info: {
    description: '';
    displayName: 'Person';
    icon: 'user';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    LinkedInProfile: Schema.Attribute.String;
    Name: Schema.Attribute.Text;
    Photo: Schema.Attribute.Media<'images'>;
    Slug: Schema.Attribute.String & Schema.Attribute.Private;
  };
}

export interface ContentSection extends Struct.ComponentSchema {
  collectionName: 'components_content_sections';
  info: {
    description: '';
    displayName: 'Section';
    icon: 'apps';
  };
  attributes: {
    Content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    Content2: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    Date: Schema.Attribute.String;
    Extra: Schema.Attribute.Enumeration<
      ['None', 'Areas', 'Card block', 'Form', 'People', 'Video', 'Wide']
    > &
      Schema.Attribute.DefaultTo<'None'>;
    Heading: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    Link: Schema.Attribute.Text;
    LinkText: Schema.Attribute.String;
    Media: Schema.Attribute.Media<'images'>;
    Name: Schema.Attribute.String;
    Order: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 20;
          min: 0;
        },
        number
      >;
    Strapline: Schema.Attribute.Text;
    Template: Schema.Attribute.Enumeration<['One column', 'Two columns']>;
  };
}

export interface ContentSeo extends Struct.ComponentSchema {
  collectionName: 'components_content_seos';
  info: {
    displayName: 'SEO';
    icon: 'cast';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Keywords: Schema.Attribute.Text;
    Title: Schema.Attribute.Text;
  };
}

export interface ContentSignupForm extends Struct.ComponentSchema {
  collectionName: 'components_content_signup_forms';
  info: {
    displayName: 'SignupForm';
  };
  attributes: {
    SubmitButtonText: Schema.Attribute.String;
    Subtitle: Schema.Attribute.Text;
    SuccessMessage: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    SuccessTitle: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface ContentVideo extends Struct.ComponentSchema {
  collectionName: 'components_content_videos';
  info: {
    description: '';
    displayName: 'Video';
    icon: 'monitor';
  };
  attributes: {
    Height: Schema.Attribute.String;
    Platform: Schema.Attribute.Enumeration<['File', 'Vimeo', 'YouTube']>;
    StreamingVideoID: Schema.Attribute.String;
    Video: Schema.Attribute.Media<'videos'>;
    Width: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.banner': ContentBanner;
      'content.card': ContentCard;
      'content.card-block': ContentCardBlock;
      'content.hub-spot': ContentHubSpot;
      'content.people': ContentPeople;
      'content.person': ContentPerson;
      'content.section': ContentSection;
      'content.seo': ContentSeo;
      'content.signup-form': ContentSignupForm;
      'content.video': ContentVideo;
    }
  }
}
