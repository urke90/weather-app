import './SearchForm.scss';

// ----------------------------------------------------------------

interface ISearchFormProps {
  children?: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchForm: React.FC<ISearchFormProps> = ({ children, onSubmit }) => {
  return (
    <form className="search-form" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default SearchForm;
