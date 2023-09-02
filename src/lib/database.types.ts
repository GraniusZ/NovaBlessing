export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      comments: {
        Row: {
          content: string
          created_at: string
          id: number
          postid: number
          username: string
        }
        Insert: {
          content: string
          created_at: string
          id?: never
          postid: number
          username: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: never
          postid?: number
          username?: string
        }
        Relationships: []
      }
      posts: {
        Row: {
          content: string
          created_at: string
          id: number
          title: string
          username: string
        }
        Insert: {
          content: string
          created_at: string
          id?: never
          title: string
          username: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: never
          title?: string
          username?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          id: string
          name: string | null
          role: string | null
          updated_at: string | null
          username: string | null
        }
        Insert: {
          id: string
          name?: string | null
          role?: string | null
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          id?: string
          name?: string | null
          role?: string | null
          updated_at?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      delete_claim: {
        Args: {
          uid: string
          claim: string
        }
        Returns: string
      }
      get_claim: {
        Args: {
          uid: string
          claim: string
        }
        Returns: Json
      }
      get_claims: {
        Args: {
          uid: string
        }
        Returns: Json
      }
      get_my_claim: {
        Args: {
          claim: string
        }
        Returns: Json
      }
      get_my_claims: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      is_claims_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      set_claim: {
        Args: {
          uid: string
          claim: string
          value: Json
        }
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
