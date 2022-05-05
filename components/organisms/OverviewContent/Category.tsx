import Image from "next/image";
import { ReactNode } from "react";
import NumberFormat from "react-number-format";

interface CategoryProps {
  children: ReactNode;
  nominal: number;
  icon: "ic-desktop" | "ic-mobile";
}

export default function Category(props: CategoryProps) {
  const { children, nominal, icon } = props;
  return (
    <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
      <div className="categories-card">
        <div className="d-flex align-items-center mb-24">
          <Image
            src={`/icon/${icon}.svg`}
            width={60}
            height={60}
            alt="icon category"
          />
          <p className="color-palette-1 mb-0 ms-12">{children}</p>
        </div>
        <div>
          <p className="text-sm color-palette-2 mb-1">Total Spent</p>
          <p className="text-2xl color-palette-1 fw-medium m-0">
            <NumberFormat
              value={nominal}
              prefix="Rp. "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </p>
        </div>
      </div>
    </div>
  );
}
