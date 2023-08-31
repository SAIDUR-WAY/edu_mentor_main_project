export interface Tutor {
    _id: string;
    id: string;
    name: string;
    students: number;
    ratings: number;
    age: number;
    education: string;
    image_url: string;
    education_qualification: {
      degree: string;
      institution: string;
      year_completed: number;
      subjects: string[];
    }[];
    tuition_info: {
      expected_salary: string;
      current_status: string;
      days_per_week: string[];
      preferred_tuition_style: string[];
      place_of_learning: string;
      extra_facilities: string[];
      preferred_medium_of_instruction: string;
      preferred_class: string[];
      preferred_subjects: string[];
      preferred_time: string[];
      preferred_areas_to_teach: string[];
    };
    contact: {
      email: string;
      phone: string;
    };
    experience: string;
    languages_spoken: string[];
    additional_info: string;
    area_covered: string[];
    subjects: string[];
    updatedAt: string;
  }
  
