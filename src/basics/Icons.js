import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import CloseSVG from "assets/icons/icon-close.svg";
import ChevronSVG from "assets/icons/icon-chevron.svg";
import CheckmarkSVG from "assets/icons/icon-checkmark.svg";
import EditSVG from "assets/icons/icon-edit.svg";
import AlertSVG from "assets/icons/icon-alert.svg";

const AlertEl = styled.div`
  display: inline-block;
  position: relative;
  width: auto;

  svg {
    g {
      fill: ${(props) => props.color};
    }
  }
`;

export const AlertIcon = ({ color, className }) => (
  <AlertEl color={color} className={className}>
    <AlertSVG />
  </AlertEl>
);

AlertIcon.propTypes = {
  color: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const EditEl = styled.div`
  display: inline-block;
  position: relative;
  padding: 0 1.25rem;
  width: 1.25rem;
  height: 1.25rem;
  width: auto;

  svg {
    position: absolute;
    width: 0.75rem;
    height: 0.75rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    path {
      fill: ${(props) => props.color};
    }
  }
`;

export const EditIcon = ({ color, className }) => (
  <EditEl color={color} className={className}>
    <EditSVG />
  </EditEl>
);

EditIcon.propTypes = {
  color: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const CheckmarkEl = styled.div`
  display: inline-block;
  position: relative;
  width: 1.5rem;
  height: 1.5rem;

  svg {
    position: absolute;
    width: 1.56rem;
    height: 1.125rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    path {
      fill: ${(props) => props.color};
    }
  }
`;

export const CheckmarkIcon = ({ color, className }) => (
  <CheckmarkEl color={color} className={className}>
    <CheckmarkSVG />
  </CheckmarkEl>
);

CheckmarkIcon.propTypes = {
  color: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const ArrowEl = styled.div`
  position: relative;

  svg {
    transform: ${(props) =>
      (props.direction === "down" && "rotate(90deg)") ||
      (props.direction === "right" && "rotate(0deg)") ||
      (props.direction === "up" && "rotate(270deg)")};
  }
`;

export const ArrowIcon = ({ direction, className }) => (
  <ArrowEl direction={direction} className={className}>
    <ChevronSVG />
  </ArrowEl>
);

ArrowIcon.propTypes = {
  direction: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const CloseEl = styled.div`
  position: relative;
  width: 100%;

  svg {
    position: absolute;
    width: 0.875rem;
    height: 0.875rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    stroke: ${(props) => props.color};
  }
`;

export const CloseIcon = ({ color, className }) => (
  <CloseEl color={color} className={className}>
    <CloseSVG />
  </CloseEl>
);

CloseIcon.propTypes = {
  color: PropTypes.string.isRequired,
  className: PropTypes.string,
};
