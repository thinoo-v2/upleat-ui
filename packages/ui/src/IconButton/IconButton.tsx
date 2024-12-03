'use client';

// import '../assets/css/common.css';
import './IconButton.css';

import { IconHamberger, IconChevronDown, IconFilter, IconKakao, IconScrollTop, IconSelectDown } from './component';

interface IconButtonProps {
  // css 내 background 로 표현시 사용
  iconName?: 'chevronDown' | 'filter' | 'selectArrow' | 'kakao' | 'scrollTop' | 'hamberger';
  // size?: number;
  // 텍스트 옆 이미지
  dataicon?: string;
  isDataIcon?: boolean;
  iconAlign?: boolean;
  // 이미지 옆 텍스트
  label?: string;
  // 텍스트사이즈
  // labelSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  // 사이즈 표기 필요에 따라 string 으로 수정해도 무방
  textTypeSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  // svg 아이콘 사이즈
  iconTypeSize?: number;
}

/**
 * 아이콘 컴포넌트
 * 식별자 ID: IconButton
 * 담당자: 김수호
 * 뎁스: IconButton
 */

export const IconButton = ({
  iconName = 'chevronDown',
  dataicon = 'OZ',
  isDataIcon = false,
  iconAlign = true,
  label = '아시아나',
  textTypeSize = 'md',
  iconTypeSize = 24,
}: IconButtonProps) => (
  <div className={`upleat-iconbutton ${iconAlign}`}>
    {isDataIcon ? (
      <>
        <span data-icon-size={textTypeSize} className={`upleat-data-icon data-icon-${dataicon}`} />
        {label && <span data-font-size={textTypeSize}>{label}</span>}
      </>
    ) : (
      <>
        {iconName === 'chevronDown' && <IconChevronDown size={iconTypeSize} />}
        {iconName === 'filter' && <IconFilter size={iconTypeSize} />}
        {iconName === 'selectArrow' && <IconSelectDown size={iconTypeSize} />}
        {iconName === 'kakao' && <IconKakao size={iconTypeSize} />}
        {iconName === 'scrollTop' && <IconScrollTop size={iconTypeSize} />}
        {iconName === 'hamberger' && <IconHamberger size={iconTypeSize} />}
      </>
    )}
  </div>
);
