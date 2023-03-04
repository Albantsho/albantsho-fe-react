import Image from "next/image";
import emptyBlogs from "@assets/images/empty-blogs.png";
import CustomPaginationComponent from "@shared/CustomPaginationComponent/CustomPaginationComponent";
import { IContact } from "interfaces/contact";
import Contact from "./Contact/Contact";

interface IProps {
  contacts: IContact[];
  handleActivePage: (event: React.ChangeEvent<unknown>, page: number) => void;
  currentPage: number;
  pagesCount: number;
}

const ContactList = ({
  contacts,
  currentPage,
  handleActivePage,
  pagesCount,
}: IProps) => {
  return (
    <div>
      <div className="mt-4 pb-8 flex flex-col gap-4 overflow-hidden">
        {contacts.length > 0 ? (
          <>
            {contacts.map((contact) => (
              <Contact contact={contact} key={contact._id} />
            ))}
          </>
        ) : (
          <Image
            width={384}
            height={384}
            loading="lazy"
            className="w-fit h-fit mx-auto mt-14 lg:mt-24"
            src={emptyBlogs}
            alt="empty blog list"
          />
        )}
      </div>
      {pagesCount > 1 && (
        <CustomPaginationComponent
          currentPage={currentPage}
          pageCount={pagesCount}
          handleActivePage={handleActivePage}
        />
      )}
    </div>
  );
};

export default ContactList;
